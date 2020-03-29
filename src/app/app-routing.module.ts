import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveUserListComponent } from './active/active-user-list/active-user-list.component';
import { DeletedUserListComponent } from './deleted/deleted-user-list/deleted-user-list.component';


const routes: Routes = [
  { path: 'active', component: ActiveUserListComponent },
  { path: 'deleted', component: DeletedUserListComponent },
  { path: 'manage', 
    loadChildren: ()=> import('./manage/manage.module').then(file => file.ManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
