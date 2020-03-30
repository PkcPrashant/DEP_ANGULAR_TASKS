import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { DeletedComponent } from './deleted/deleted.component';


const routes: Routes = [
  { path: 'active', component: ActiveComponent },
  { path: 'deleted', component: DeletedComponent },
  { path: 'manage', 
    loadChildren: ()=> import('./manage/manage.module').then(file => file.ManageModule)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
