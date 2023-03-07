import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

import { AuthGuard } from './guards/authgurd.gurd';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"chat", component: SidenavbarComponent, canActivate: [AuthGuard]},
  {path:"singup", component: RegisterComponent,canActivate: [LoginGuard]},
  {path:"login", component: LoginComponent,canActivate: [LoginGuard]},
  {path:"**", component:LoginComponent,canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
