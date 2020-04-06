import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserModel } from 'src/app/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user: UserModel;
  @Input() showUserDetails: boolean;

  @Output() changeStatus: EventEmitter<UserModel> = new EventEmitter();
  @Output() updateUser: EventEmitter<string> = new EventEmitter();

  modifyStatus(userData: UserModel): void {
    this.changeStatus.emit(userData);
  }

  editUser(userId): void {
    this.updateUser.emit(userId);
  }

}
