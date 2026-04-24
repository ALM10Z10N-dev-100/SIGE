import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesServicios } from './tramites-servicios';

describe('TramitesServicios', () => {
  let component: TramitesServicios;
  let fixture: ComponentFixture<TramitesServicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramitesServicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TramitesServicios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
