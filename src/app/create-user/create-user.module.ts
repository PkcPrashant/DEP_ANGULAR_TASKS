import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormModule } from '../user-form/user-form.module';
import { CreateUserComponent } from './create-user.component';



@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    UserFormModule
  ],
  exports: [
    CreateUserComponent
  ]
})
export class CreateUserModule { }
