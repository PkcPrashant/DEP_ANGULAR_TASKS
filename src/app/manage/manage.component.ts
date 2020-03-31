import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { UserStructure } from '../user-structure.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  users: Observable<UserStructure[]>;
  showUserDetails: boolean = true;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  showDetails(userData): void {
    this.router.navigate(['manage', userData.id]);
  }

}
