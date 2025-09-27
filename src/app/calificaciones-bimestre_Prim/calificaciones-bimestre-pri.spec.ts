import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesBimestrePri } from './calificaciones-bimestre-pri';

describe('CalificacionesBimestrePri', () => {
  let component: CalificacionesBimestrePri;
  let fixture: ComponentFixture<CalificacionesBimestrePri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificacionesBimestrePri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionesBimestrePri);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
