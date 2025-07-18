import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSectionSecoandComponent } from './top-section-secoand.component';

describe('TopSectionSecoandComponent', () => {
  let component: TopSectionSecoandComponent;
  let fixture: ComponentFixture<TopSectionSecoandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSectionSecoandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSectionSecoandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
