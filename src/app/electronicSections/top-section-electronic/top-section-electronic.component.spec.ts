import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSectionElectronicComponent } from './top-section-electronic.component';

describe('TopSectionElectronicComponent', () => {
  let component: TopSectionElectronicComponent;
  let fixture: ComponentFixture<TopSectionElectronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSectionElectronicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSectionElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
