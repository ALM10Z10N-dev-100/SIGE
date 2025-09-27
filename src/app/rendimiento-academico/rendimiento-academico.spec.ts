import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoAcademico } from './rendimiento-academico';

describe('RendimientoAcademico', () => {
  let component: RendimientoAcademico;
  let fixture: ComponentFixture<RendimientoAcademico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendimientoAcademico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendimientoAcademico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
