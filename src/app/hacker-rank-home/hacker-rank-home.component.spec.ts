import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerRankHomeComponent } from './hacker-rank-home.component';

describe('HackerRankHomeComponent', () => {
  let component: HackerRankHomeComponent;
  let fixture: ComponentFixture<HackerRankHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerRankHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerRankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
