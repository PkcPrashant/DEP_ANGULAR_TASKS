import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { UserModel } from '../user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  users$: Observable<UserModel[]>;
  showUserDetails: boolean = true;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  showDetails(userData: UserModel): void {
    this.router.navigate(['manage', userData.id]);
  }

  createUser(): void {
    this.router.navigate(['manage/create']);
  }

  updateUser(userId: string): void {
    this.router.navigate(['manage/update', userId]);
  }

}
