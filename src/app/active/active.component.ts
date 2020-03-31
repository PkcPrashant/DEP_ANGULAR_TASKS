import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserStructure } from '../user-structure.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  activeUsers: Observable<any>;

  showUserDetails: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void{
    this.loadActiveUsers();
  }

  loadActiveUsers(): void{
    this.activeUsers = this.usersService.getActiveUsers();
  }

  deActivateUser(id: string): void {
    this.usersService.changeStatus(id);
    this.loadActiveUsers();
  }

}
