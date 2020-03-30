import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserStructure } from '../user-structure.model';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent {

  deletedUsers: UserStructure[];

  constructor(private usersService: UsersService) {}

  ngDoCheck(){
    this.deletedUsers = this.usersService.getInActiveUsers();
  }

  activateUser(id: string): void {
    this.usersService.changeStatus(id);
  }

}
