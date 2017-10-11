import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LastFmService {
  baseUri: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }

  getArtists = (page: number) => this.http.get(
    this.baseUri + '/?method=chart.gettopartists&api_key=119e39cb330a0f59c3f1616150e3e8f0&format=json&limit=' +
      this.limit + '&page=' + page,
      { headers: this.headers }).map(x => {
        console.log(x.json());
        return x.json();
      })

  getTracks = (page: number) => this.http.get(
    this.baseUri + '/?method=chart.getTopTracks&api_key=119e39cb330a0f59c3f1616150e3e8f0&format=json&limit=' +
    this.limit + '&page=' + page,
    { headers: this.headers }).map(x => {
      console.log(x.json());
      return x.json();
    })
}
