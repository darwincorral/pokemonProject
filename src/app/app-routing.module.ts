import { NgModule } from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**',component: NopagefoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
