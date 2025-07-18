import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobikeSectionFoureComponent } from './mobike-section-foure.component';

describe('MobikeSectionFoureComponent', () => {
  let component: MobikeSectionFoureComponent;
  let fixture: ComponentFixture<MobikeSectionFoureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobikeSectionFoureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobikeSectionFoureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
