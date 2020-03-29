import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() usersList;

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  modifyStatus(id: string) {
    this.changeStatus.emit(id);
  }

}
