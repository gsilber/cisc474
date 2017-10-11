import { Project1Component } from './pages/project1/project1.component';
import { Project2Component } from './pages/project2/project2.component';
import { Project3Component } from './pages/project3/project3.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'project1',component: Project1Component},
  {path: 'project2', component: Project2Component},
  {path: 'project3', component: Project3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
