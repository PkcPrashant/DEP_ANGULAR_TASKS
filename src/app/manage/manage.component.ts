import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  users = [];

  constructor(private usersList: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.usersList.getUsers();
  }

  showDetails(id: string): void {
    this.router.navigate(['manage', id]);
  }

}
