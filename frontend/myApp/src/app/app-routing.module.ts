import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JoinComponent } from './components/join/join.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch:'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'aboutpage', component: AboutpageComponent},
  {path: 'join', component: JoinComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
