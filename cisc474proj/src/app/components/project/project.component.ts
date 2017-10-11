import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() dataKey: string;
  projects: any = [];
  constructor(private _svc: ProjectService) {
  }

  ngOnInit() {
    this._svc.projects.subscribe(
      data => this.projects = data[this.dataKey]
    );
  }

  goUrl = url => window.open(url, '_blank');
}