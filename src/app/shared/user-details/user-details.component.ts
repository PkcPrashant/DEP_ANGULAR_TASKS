import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id'];
    this.user = this.usersService.getUsers().find((u) => u.id === idParam);

    this.route.params.subscribe(
      (param) => {
        this.user = this.usersService.getUsers().find((u) => u.id === param['id']);
      }
    );
  }

}
