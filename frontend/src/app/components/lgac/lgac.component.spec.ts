import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LGACComponent } from './lgac.component';

describe('LGACComponent', () => {
  let component: LGACComponent;
  let fixture: ComponentFixture<LGACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LGACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LGACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
