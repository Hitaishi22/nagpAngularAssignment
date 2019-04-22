import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent  }  from './login/login.component';
import {OnBoardingFormComponent} from './on-boarding-form/on-boarding-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'onBoardingForm', component: OnBoardingFormComponent },
  { path: 'studentDetails', component: StudentDetailsComponent },
  { path: 'student', component: NavbarComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports:[RouterModule],
  declarations: []
 
})
export class AppRoutingModule { }
