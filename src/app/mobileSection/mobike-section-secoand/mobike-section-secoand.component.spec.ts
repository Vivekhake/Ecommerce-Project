import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobikeSectionSecoandComponent } from './mobike-section-secoand.component';

describe('MobikeSectionSecoandComponent', () => {
  let component: MobikeSectionSecoandComponent;
  let fixture: ComponentFixture<MobikeSectionSecoandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobikeSectionSecoandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobikeSectionSecoandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
