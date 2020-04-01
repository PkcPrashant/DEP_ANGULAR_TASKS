import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from '../user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  activeUsers$: Observable<UserModel[]>;

  showUserDetails: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void{
    this.loadActiveUsers();
  }

  loadActiveUsers(): void{
    this.activeUsers$ = this.usersService.getActiveUsers();
  }

  deActivateUser(userData: UserModel): void {
    this.usersService.changeStatus(userData)
    .subscribe(
      () => this.loadActiveUsers()
    );
  }

}
