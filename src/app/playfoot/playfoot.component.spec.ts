import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayfootComponent } from './playfoot.component';

describe('PlayfootComponent', () => {
  let component: PlayfootComponent;
  let fixture: ComponentFixture<PlayfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
