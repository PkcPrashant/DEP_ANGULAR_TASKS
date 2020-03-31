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

  deletedUsers: Observable<any>;
  showUserDetails: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void{
    this.loadDeletedUsers();
  }

  loadDeletedUsers(): void{
    this.deletedUsers = this.usersService.getInActiveUsers();
  }

  activateUser(id: string): void {
    this.usersService.changeStatus(id);
    this.loadDeletedUsers();
  }

}
