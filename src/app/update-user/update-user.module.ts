import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user.component';
import { UserFormModule } from '../user-form/user-form.module';



@NgModule({
  declarations: [UpdateUserComponent],
  imports: [
    CommonModule,
    UserFormModule
  ],
  exports: [
    UpdateUserComponent
  ]
})
export class UpdateUserModule { }
