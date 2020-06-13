import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GoodsComponent } from './goods/goods.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  HttpClientModule } from '@angular/common/http';
import { Dataservice } from './home/data.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { SumComponent } from './sum/sum.component';
import { RegisterComponent } from './register/register.component'
import { AuthService } from 'src/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


import { AuthGuard } from './guard/auth.guard';
import { MaterialModule } from './material-module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    GoodsComponent,
    CartComponent,
    NotfoundComponent,
    NavbarComponent,
    EditComponent,
    AddComponent,
    SumComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule
    
  ],
  providers: [Dataservice,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
