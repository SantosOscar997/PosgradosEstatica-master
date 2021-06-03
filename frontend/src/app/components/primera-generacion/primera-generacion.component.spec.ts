import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraGeneracionComponent } from './primera-generacion.component';

describe('PrimeraGeneracionComponent', () => {
  let component: PrimeraGeneracionComponent;
  let fixture: ComponentFixture<PrimeraGeneracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraGeneracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraGeneracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
