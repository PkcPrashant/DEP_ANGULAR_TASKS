import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserStructure } from 'src/app/user-structure.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() usersList: UserStructure[];

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  modifyStatus(id: string): void {
    this.changeStatus.emit(id);
  }

}
