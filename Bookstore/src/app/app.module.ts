import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { BookCardComponent } from './Components/book-card/book-card.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { BookDetailPageComponent } from './Components/book-detail-page/book-detail-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { CartCardComponent } from './Components/cart-card/cart-card.component';
ReactiveFormsModule
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    BookCardComponent,
    NavbarComponent,
    FooterComponent,
    DashBoardComponent,
    BookDetailPageComponent,
    CartPageComponent,
    CartCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
