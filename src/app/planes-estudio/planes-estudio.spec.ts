import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesEstudio } from './planes-estudio';

describe('PlanesEstudio', () => {
  let component: PlanesEstudio;
  let fixture: ComponentFixture<PlanesEstudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesEstudio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesEstudio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
