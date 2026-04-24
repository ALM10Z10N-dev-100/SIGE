import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManitasEntusiastas } from './manitas-entusiastas';

describe('ManitasEntusiastas', () => {
  let component: ManitasEntusiastas;
  let fixture: ComponentFixture<ManitasEntusiastas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManitasEntusiastas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManitasEntusiastas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
