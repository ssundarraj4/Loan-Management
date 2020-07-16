import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { SigninComponent } from './signin/signin.component';
import { LoanComponent } from './loan/loan.component';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './loan/basic/basic.component';
import { BorrowerComponent } from './loan/borrower/borrower.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SignoutComponent } from './signout/signout.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AboutusComponent, 
    SigninComponent, 
    LoanComponent,  
    HomeComponent,  
    BasicComponent,  
    BorrowerComponent,
    SignoutComponent, 
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
