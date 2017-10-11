import { TracksComponent } from './views/tracks/tracks.component';
import { ArtistsComponent } from './views/artists/artists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'artist', pathMatch: 'full'},
  {path: 'artist', component: ArtistsComponent },
  {path: 'track', component: TracksComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
