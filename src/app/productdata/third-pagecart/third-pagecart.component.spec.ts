import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPagecartComponent } from './third-pagecart.component';

describe('ThirdPagecartComponent', () => {
  let component: ThirdPagecartComponent;
  let fixture: ComponentFixture<ThirdPagecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPagecartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPagecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
