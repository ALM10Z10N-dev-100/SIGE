import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaActivada } from './cuenta-activada';

describe('CuentaActivada', () => {
  let component: CuentaActivada;
  let fixture: ComponentFixture<CuentaActivada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentaActivada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaActivada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
