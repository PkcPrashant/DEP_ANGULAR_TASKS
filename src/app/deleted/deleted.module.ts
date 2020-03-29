import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted.component';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [ DeletedComponent ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DeletedComponent
  ]
})
export class DeletedModule { }
