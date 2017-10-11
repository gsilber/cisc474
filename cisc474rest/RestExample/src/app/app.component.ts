import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuCollapsed = true;
  constructor(private _router: Router){
    this.menuCollapsed = true;
    _router.events.subscribe((x) => this.menuCollapsed = true);
  }
}
