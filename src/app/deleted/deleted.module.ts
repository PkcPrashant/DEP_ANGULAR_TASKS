import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted.component';
import { SharedUserModule } from '../shared-user/shared-user/shared-user.module';



@NgModule({
  declarations: [ DeletedComponent ],
  imports: [
    CommonModule,
    SharedUserModule
  ],
  exports: [
    DeletedComponent
  ]
})
export class DeletedModule { }
