import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcartComponent } from './secondcart.component';

describe('SecondcartComponent', () => {
  let component: SecondcartComponent;
  let fixture: ComponentFixture<SecondcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondcartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
