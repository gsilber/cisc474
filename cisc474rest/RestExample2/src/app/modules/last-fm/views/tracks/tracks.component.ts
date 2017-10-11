import { DialogService } from 'ng2-bootstrap-modal';
import { LastFmService } from '../../last-fm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks: any[] = [ ];
  attributes: any[] = [ ];
  selectedTrack = -1;
  constructor(private _apiSvc: LastFmService, private _dialogService: DialogService) {
    _apiSvc.getTracks(1).subscribe(x => {
      this.tracks = x.tracks.track;
      this.attributes = x.tracks['@attr'];
     });
  }

  showDetail(index, track) {
    console.log(index);
    console.log(track.name);
    if (this.selectedTrack === index){
      this.selectedTrack = -1;
    } else {
      this.selectedTrack = index;
    }
  }
    ngOnInit() {
  }

}
