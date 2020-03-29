import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent {

  activeUsers = [];

  constructor(private users: UsersService) {}

  ngDoCheck(){
    this.activeUsers = this.users.getActiveUsers();
  }

  deactivate(id: string) {
    this.users.changeStatus(id);
  }

}
