import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserspageComponent } from './userspage/userspage.component';
import { AuthGuard } from './auth.guard';
import { FileuploadComponent } from './fileupload/fileupload.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomepageComponent},
  {path:'users',component:UserspageComponent,canActivate:[AuthGuard]},
  {path:'file',component:FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
