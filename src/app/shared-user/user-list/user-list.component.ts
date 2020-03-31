import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserStructure } from 'src/app/user-structure.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() usersList: UserStructure[];
  @Input() showUserDetails: boolean;

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  modifyStatus(userData): void {
    this.changeStatus.emit(userData);
  }

}
