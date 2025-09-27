import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAdministrativo } from './personal-administrativo';

describe('PersonalAdministrativo', () => {
  let component: PersonalAdministrativo;
  let fixture: ComponentFixture<PersonalAdministrativo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalAdministrativo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalAdministrativo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
