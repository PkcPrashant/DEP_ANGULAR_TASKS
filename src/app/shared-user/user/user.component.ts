import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  modifyStatus(id: string): void {
    this.changeStatus.emit(id);
  }

}
