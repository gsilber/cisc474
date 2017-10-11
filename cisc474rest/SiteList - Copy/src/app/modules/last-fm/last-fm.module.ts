import { Http, HttpModule } from '@angular/http';
import { LastFmService } from './last-fm.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function lastFMfactory(http: Http){
  return new LastFmService(http, 'http://ws.audioscrobbler.com/2.0');
}

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [{provide: LastFmService, useFactory: lastFMfactory, deps: [Http]}],
  declarations: []
})
export class LastFmModule { }
