import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatComponent } from './components/chat/chat.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { BackgroundComponent } from './components/background/background.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerModule } from './components/spinner/spinner.module';
import { SpinnerInterceptor } from './spinner.interceptor';

//filter pipe
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatComponent,
    SidenavbarComponent,
    BackgroundComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
