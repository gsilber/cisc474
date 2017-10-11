import { TracksComponent } from './views/tracks/tracks.component';
import { ArtistsComponent } from './views/artists/artists.component';
import { LastFmModule } from './modules/last-fm/last-fm.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import { ArtistPopupComponent } from './views/artists/artist-popup/artist-popup.component';
import {CollapseModule} from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistPopupComponent,
    TracksComponent
  ],
  imports: [
    LastFmModule,
    BrowserModule,
    FormsModule,
    BootstrapModalModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  entryComponents: [ArtistPopupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
