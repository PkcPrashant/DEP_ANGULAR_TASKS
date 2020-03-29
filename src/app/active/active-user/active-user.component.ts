import { Component, Input } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent {

  @Input() activeUser;

  constructor(private users: UsersService){}

  deactivate(id: string): void {
    this.users.changeStatus(id);
  }

}
