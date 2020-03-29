import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent {

  deletedUsers = [];

  constructor(private users: UsersService) {}

  ngDoCheck(){
    this.deletedUsers = this.users.getInActiveUsers();
  }

  activate(id: string) {
    this.users.changeStatus(id);
  }

}
