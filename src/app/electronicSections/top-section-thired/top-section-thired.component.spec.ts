import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSectionThiredComponent } from './top-section-thired.component';

describe('TopSectionThiredComponent', () => {
  let component: TopSectionThiredComponent;
  let fixture: ComponentFixture<TopSectionThiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSectionThiredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSectionThiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
