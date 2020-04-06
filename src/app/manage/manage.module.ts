import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../shared-user/user-details/user-details.component';
import { SharedUserModule } from '../shared-user/shared-user/shared-user.module';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { CreateUserModule } from '../create-user/create-user.module';
import { UpdateUserModule } from '../update-user/update-user.module';

const routes: Routes = [
  { 
    path: '', component: ManageComponent,
    children: [
      { path: 'create', component: CreateUserComponent },
      { path: 'update/:id', component: UpdateUserComponent },
      { path: ':id', component: UserDetailsComponent }
    ]
  }
]

@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    SharedUserModule,
    CreateUserModule,
    UpdateUserModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ManageComponent
  ]
})
export class ManageModule { }
