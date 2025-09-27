import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaComunidadQueInspira } from './una-comunidad-que-inspira';

describe('UnaComunidadQueInspira', () => {
  let component: UnaComunidadQueInspira;
  let fixture: ComponentFixture<UnaComunidadQueInspira>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnaComunidadQueInspira]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnaComunidadQueInspira);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
