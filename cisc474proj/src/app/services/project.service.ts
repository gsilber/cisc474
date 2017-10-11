import {Location} from '@angular/common';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  public projects: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor(private _http: Http, private _loc: Location) {
    const url=_loc.prepareExternalUrl('assets/projects.json');
    _http.get(url).map(res => res.json())
    .subscribe(data => this.projects.next(data),
      err => console.log(err),
      () => console.log('projects loaded: ')
    );
   }
}
