import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: Observable<UserModel>;

  constructor(private usersService: UsersService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.user = this.usersService.getUser(param['id']);
    })
  }

  handleExistingUser(user: UserModel): void {
    this.usersService.updateUser(user).subscribe();
  }

}
