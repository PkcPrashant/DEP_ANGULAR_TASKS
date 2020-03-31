import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserStructure } from '../user-structure.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  deletedUsers: Observable<UserStructure[]>;
  showUserDetails: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void{
    this.loadDeletedUsers();
  }

  loadDeletedUsers(): void{
    this.deletedUsers = this.usersService.getInActiveUsers();
  }

  activateUser(userData): void {
    this.usersService.changeStatus(userData)
    .subscribe(
      () => this.loadDeletedUsers()
    );
  }

}
