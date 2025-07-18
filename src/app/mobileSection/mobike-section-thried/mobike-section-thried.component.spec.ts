import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobikeSectionThriedComponent } from './mobike-section-thried.component';

describe('MobikeSectionThriedComponent', () => {
  let component: MobikeSectionThriedComponent;
  let fixture: ComponentFixture<MobikeSectionThriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobikeSectionThriedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobikeSectionThriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
