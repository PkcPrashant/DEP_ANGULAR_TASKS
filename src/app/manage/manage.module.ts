import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../shared-user/user-details/user-details.component';
import { SharedUserModule } from '../shared-user/shared-user/shared-user.module';

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
    SharedUserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ManageComponent
  ]
})
export class ManageModule { }
