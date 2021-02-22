import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { signupComponent } from './home/signup/signup.component';
import { Component1Component } from './home/component1/component1.component';
import { HeaderComponent } from './common/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './common/footer/footer.component';
import { ImageComponent } from './home/image/image.component';
import { AboutComponent } from './navbar-components/about/about.component';
import { ContactComponent } from './navbar-components/contact/contact.component';
import { BrandComponent } from './navbar-components/brand/brand.component';
import { ChildComponent } from './child/child.component';
import { LoaderComponent } from './common/loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    signupComponent,
    Component1Component,
    HeaderComponent,
    FooterComponent,
    ImageComponent,
    AboutComponent,
    ContactComponent,
    BrandComponent,
    ChildComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
