import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-active-user-list',
  templateUrl: './active-user-list.component.html',
  styleUrls: ['./active-user-list.component.css']
})
export class ActiveUserListComponent {

  activeUsers = [];

  constructor(private users: UsersService) { }

  ngDoCheck(){
    this.activeUsers = this.users.getActiveUsers();
  }

}
