import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEducativo } from './material-educativo';

describe('MaterialEducativo', () => {
  let component: MaterialEducativo;
  let fixture: ComponentFixture<MaterialEducativo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialEducativo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialEducativo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
