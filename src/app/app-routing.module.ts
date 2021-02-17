import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrandComponent } from './brand/brand.component';
const routes: Routes = [
  {path: 'brand',component:BrandComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  { path: '**', redirectTo: 'brand' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
