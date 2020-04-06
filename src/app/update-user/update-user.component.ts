import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: Observable<UserModel>;

  constructor(private usersService: UsersService, private router: ActivatedRoute, public route: Router) {}

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.user = this.usersService.getUser(param['id']);
    })
  }

  handleExistingUser(user: UserModel): void {
    this.usersService.updateUser(user).subscribe(
      (result)=> this.route.navigate(['manage']),
      (error) => console.log("Error at handleNewUser ", error)
    );
  }

}
