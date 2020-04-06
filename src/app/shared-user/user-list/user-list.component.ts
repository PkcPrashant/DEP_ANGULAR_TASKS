import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() usersList: UserModel[];
  @Input() showUserDetails: boolean;

  @Output() changeStatus: EventEmitter<UserModel> = new EventEmitter();
  @Output() updateUser: EventEmitter<string> = new EventEmitter();

  modifyStatus(userData: UserModel): void {
    this.changeStatus.emit(userData);
  }

  editUser(userId: string): void {
    this.updateUser.emit(userId);
  }

}
