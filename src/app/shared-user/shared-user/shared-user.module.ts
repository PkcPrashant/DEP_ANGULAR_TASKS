import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UsernamePipe } from '../username.pipe';
import { UserStatusPipe } from '../user-status.pipe';



@NgModule({
  declarations: [
    UserComponent, UserListComponent, UserDetailsComponent, UsernamePipe, UserStatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent
  ]
})
export class SharedUserModule { }
