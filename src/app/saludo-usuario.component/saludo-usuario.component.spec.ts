import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoUsuarioComponent } from './saludo-usuario.component';

describe('SaludoUsuarioComponent', () => {
  let component: SaludoUsuarioComponent;
  let fixture: ComponentFixture<SaludoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludoUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
