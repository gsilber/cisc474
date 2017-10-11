import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPopupComponent } from './artist-popup.component';

describe('ArtistPopupComponent', () => {
  let component: ArtistPopupComponent;
  let fixture: ComponentFixture<ArtistPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
