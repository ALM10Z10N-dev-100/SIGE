import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectandoElAprendizaje } from './conectando-el-aprendizaje';

describe('ConectandoElAprendizaje', () => {
  let component: ConectandoElAprendizaje;
  let fixture: ComponentFixture<ConectandoElAprendizaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConectandoElAprendizaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConectandoElAprendizaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
