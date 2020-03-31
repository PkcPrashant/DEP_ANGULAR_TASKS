import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserStructure } from 'src/app/user-structure.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  className: string;

  @Input() user;
  @Input() showUserDetails: boolean;

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  modifyStatus(id: string): void {
    this.changeStatus.emit(id);
  }

}
