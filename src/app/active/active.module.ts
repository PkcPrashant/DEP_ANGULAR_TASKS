import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUserComponent } from './active-user/active-user.component';
import { ActiveUserListComponent } from './active-user-list/active-user-list.component';

@NgModule({
  declarations: [ ActiveUserComponent, ActiveUserListComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    ActiveUserComponent, ActiveUserListComponent
  ]
})
export class ActiveModule { }
