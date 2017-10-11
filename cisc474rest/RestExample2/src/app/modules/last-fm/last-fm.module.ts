import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { TracksComponent } from './views/tracks/tracks.component';
import { ArtistsComponent } from './views/artists/artists.component';
import { ArtistPopupComponent } from './views/artists/artist-popup/artist-popup.component';
import { LastFmService } from './last-fm.service';

const routes: Routes = [
  {path: '', redirectTo: 'artist'},
  {path: 'artist', component: ArtistsComponent},
  {path: 'track', component: TracksComponent}
];

export function lastFMfactory(http: Http){
  return new LastFmService(http, 'http://ws.audioscrobbler.com/2.0');
}

@NgModule({
  declarations:[
    ArtistsComponent,
    TracksComponent,
    ArtistPopupComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BootstrapModalModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ArtistPopupComponent],
  providers: [{provide: LastFmService, useFactory: lastFMfactory, deps: [Http]}],
  exports: [RouterModule]
})
export class LastFmModule { }
