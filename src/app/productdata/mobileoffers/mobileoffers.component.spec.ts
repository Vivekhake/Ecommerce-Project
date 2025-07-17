import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileoffersComponent } from './mobileoffers.component';

describe('MobileoffersComponent', () => {
  let component: MobileoffersComponent;
  let fixture: ComponentFixture<MobileoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileoffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
