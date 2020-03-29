import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user;

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  modifyStatus(id: string): void {
    this.changeStatus.emit(id);
  }

}
