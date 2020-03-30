import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { UserStructure } from '../user-structure.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  users: UserStructure[];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  showDetails(id: string): void {
    this.router.navigate(['manage', id]);
  }

}
