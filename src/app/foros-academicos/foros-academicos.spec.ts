import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForosAcademicos } from './foros-academicos';

describe('ForosAcademicos', () => {
  let component: ForosAcademicos;
  let fixture: ComponentFixture<ForosAcademicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForosAcademicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForosAcademicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
