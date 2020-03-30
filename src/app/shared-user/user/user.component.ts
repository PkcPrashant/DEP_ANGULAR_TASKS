import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserStructure } from 'src/app/user-structure.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  className: string;

  @Input() user: UserStructure;

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  constructor(private route: Router){
    if(this.route.url === '/active'){
      this.className = 'active';
    }else if(this.route.url === '/deleted'){
      this.className = 'deleted';
    }else{
      this.className = 'manage';
    }
  }

  modifyStatus(id: string): void {
    this.changeStatus.emit(id);
  }

}
