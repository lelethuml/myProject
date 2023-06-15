import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch:'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'aboutpage', component: AboutpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
