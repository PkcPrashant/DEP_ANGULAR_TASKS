import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from '../user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  deletedUsers$: Observable<UserModel[]>;
  showUserDetails: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void{
    this.loadDeletedUsers();
  }

  loadDeletedUsers(): void{
    this.deletedUsers$ = this.usersService.getInActiveUsers();
  }

  activateUser(userData: UserModel): void {
    this.usersService.changeStatus(userData)
    .subscribe(
      () => {
        return this.loadDeletedUsers()}
    );
  }

}
