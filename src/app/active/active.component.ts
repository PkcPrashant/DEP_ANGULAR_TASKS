import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserStructure } from '../user-structure.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent {

  activeUsers: UserStructure[];

  constructor(private usersService: UsersService) {}

  ngDoCheck(){
    this.activeUsers = this.usersService.getActiveUsers();
  }

  deActivateUser(id: string): void {
    this.usersService.changeStatus(id);
  }

}
