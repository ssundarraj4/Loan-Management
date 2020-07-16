import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SigninComponent } from './signin/signin.component';
import { LoanComponent } from './loan/loan.component';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './loan/basic/basic.component';
import { BorrowerComponent } from './loan/borrower/borrower.component';
import { PropertyComponent } from './loan/property/property.component';
import { LienComponent } from './loan/lien/lien.component';
import { LegalComponent } from './loan/legal/legal.component';
import { SignoutComponent } from './signout/signout.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signout', component: SignoutComponent},
  {path: 'loan', component: LoanComponent,
  children:[
    {path: 'basic', component: BasicComponent},
    {path: 'borrower', component: BorrowerComponent},
    {path: 'property', component: PropertyComponent},
    {path: 'lien', component: LienComponent},
    {path: 'legal', component: LegalComponent},
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
