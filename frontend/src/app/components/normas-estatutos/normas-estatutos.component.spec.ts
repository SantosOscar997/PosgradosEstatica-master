import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasEstatutosComponent } from './normas-estatutos.component';

describe('NormasEstatutosComponent', () => {
  let component: NormasEstatutosComponent;
  let fixture: ComponentFixture<NormasEstatutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormasEstatutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormasEstatutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
