import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthentificationService} from './authentification.service'
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const AppRoute: Routes =[
  { path:'login', component:LoginComponent}, 
  { path:'home', component:HomeComponent},
  { path:'', redirectTo:'/login',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoute),
    
  ],
  providers: [
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
