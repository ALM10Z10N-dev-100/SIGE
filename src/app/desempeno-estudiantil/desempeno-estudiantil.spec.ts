import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesempenoEstudiantil } from './desempeno-estudiantil';

describe('DesempenoEstudiantil', () => {
  let component: DesempenoEstudiantil;
  let fixture: ComponentFixture<DesempenoEstudiantil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesempenoEstudiantil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesempenoEstudiantil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
