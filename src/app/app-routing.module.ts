import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './navbar-components/about/about.component';
import { ContactComponent } from './navbar-components/contact/contact.component';
import { BrandComponent } from './navbar-components/brand/brand.component';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { signupComponent } from './home/signup/signup.component';
const routes: Routes = [
  {path: 'brand',component:BrandComponent, canActivate:[AuthGuard]},
  {path: 'about',component:AboutComponent, canActivate:[AuthGuard]},
  {path: 'contact',component:ContactComponent, canActivate:[AuthGuard]},
  {path: "login", component :LoginComponent },
  {path: "signup", component:signupComponent},
  {path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
