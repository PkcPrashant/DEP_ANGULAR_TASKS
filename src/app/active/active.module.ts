import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUserModule } from '../shared-user/shared-user/shared-user.module';
import { ActiveComponent } from './active.component';

@NgModule({
  declarations: [ ActiveComponent],
  imports: [
    CommonModule,
    SharedUserModule
  ],
  exports: [
    ActiveComponent
  ]
})
export class ActiveModule { }
