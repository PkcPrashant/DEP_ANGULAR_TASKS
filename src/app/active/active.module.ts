import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { ActiveComponent } from './active.component';

@NgModule({
  declarations: [ ActiveComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SharedModule, ActiveComponent
  ]
})
export class ActiveModule { }
