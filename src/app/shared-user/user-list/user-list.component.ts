import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserStructure } from 'src/app/user-structure.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() usersList: Observable<any>;
  @Input() showUserDetails: boolean;

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  modifyStatus(id: string): void {
    this.changeStatus.emit(id);
  }

}
