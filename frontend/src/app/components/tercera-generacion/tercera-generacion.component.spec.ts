import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraGeneracionComponent } from './tercera-generacion.component';

describe('TerceraGeneracionComponent', () => {
  let component: TerceraGeneracionComponent;
  let fixture: ComponentFixture<TerceraGeneracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceraGeneracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraGeneracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
