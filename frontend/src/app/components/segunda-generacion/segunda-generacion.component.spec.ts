import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaGeneracionComponent } from './segunda-generacion.component';

describe('SegundaGeneracionComponent', () => {
  let component: SegundaGeneracionComponent;
  let fixture: ComponentFixture<SegundaGeneracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaGeneracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaGeneracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
