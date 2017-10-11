import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lastfm', loadChildren: './modules/last-fm/last-fm.module#LastFmModule'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
