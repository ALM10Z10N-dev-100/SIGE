import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDidactico } from './contenido-didactico';

describe('ContenidoDidactico', () => {
  let component: ContenidoDidactico;
  let fixture: ComponentFixture<ContenidoDidactico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoDidactico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoDidactico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
