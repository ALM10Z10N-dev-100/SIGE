import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesInteres } from './enlaces-interes';

describe('EnlacesInteres', () => {
  let component: EnlacesInteres;
  let fixture: ComponentFixture<EnlacesInteres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlacesInteres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesInteres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
