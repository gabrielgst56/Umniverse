import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListStationComponent } from './list-stations/list-stations.component';
import { AddStationComponent } from './add-station/add-station.component';

const routes: Routes = [ {path: '', component: HomeComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: 'list-stations', component: ListStationComponent},
                        {path: 'add-station', component: AddStationComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
