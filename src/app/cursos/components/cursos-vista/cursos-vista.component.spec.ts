import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosVistaComponent } from './cursos-vista.component';

describe('CursosVistaComponent', () => {
  let component: CursosVistaComponent;
  let fixture: ComponentFixture<CursosVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosVistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
