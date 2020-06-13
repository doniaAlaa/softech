import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GoodsComponent } from './goods/goods.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SumComponent } from './sum/sum.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';




const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:GoodsComponent ,  canActivate: [AuthGuard]},
  
  {
    path:'cart', 
    component:CartComponent,
    
    canActivate: [AuthGuard]
 
  },
  {path:'add', component:AddComponent},
  {path:'edit/:id', component:EditComponent},
  
  {path:'**', component:NotfoundComponent}

 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
