import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserStructure } from 'src/app/user-structure.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  className: string;

  @Input() user: UserStructure;
  @Input() showUserDetails: boolean;

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  modifyStatus(userData): void {
    this.changeStatus.emit(userData);
  }

}
