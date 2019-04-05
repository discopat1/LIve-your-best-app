import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBestComponent } from './live-best.component';

describe('LiveBestComponent', () => {
  let component: LiveBestComponent;
  let fixture: ComponentFixture<LiveBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
