import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasDigitales } from './herramientas-digitales';

describe('HerramientasDigitales', () => {
  let component: HerramientasDigitales;
  let fixture: ComponentFixture<HerramientasDigitales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientasDigitales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientasDigitales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
