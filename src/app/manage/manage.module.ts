import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';

const routes: Routes = [
  { 
    path: '', component: ManageComponent,
    children: [
      { path: ':id', component: UserDetailsComponent }
    ]
  }
]

@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ManageComponent
  ]
})
export class ManageModule { }
