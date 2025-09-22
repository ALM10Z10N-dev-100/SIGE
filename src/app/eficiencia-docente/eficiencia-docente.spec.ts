import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EficienciaDocente } from './eficiencia-docente';

describe('EficienciaDocente', () => {
  let component: EficienciaDocente;
  let fixture: ComponentFixture<EficienciaDocente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EficienciaDocente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EficienciaDocente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
