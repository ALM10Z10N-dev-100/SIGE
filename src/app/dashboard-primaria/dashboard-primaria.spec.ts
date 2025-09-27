import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPrimaria } from './dashboard-primaria';

describe('DashboardPrimaria', () => {
  let component: DashboardPrimaria;
  let fixture: ComponentFixture<DashboardPrimaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPrimaria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPrimaria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
