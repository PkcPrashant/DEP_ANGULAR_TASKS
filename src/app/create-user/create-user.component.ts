import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  handleNewUser(userData: UserModel): void {
    this.usersService.createUser(userData).subscribe(
      (result)=> result,
      (error) => console.log("Error at handleNewUser ", error)
    );
  }

}
