import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCardsComponent } from './cursos-cards.component';

describe('CursosCardsComponent', () => {
  let component: CursosCardsComponent;
  let fixture: ComponentFixture<CursosCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
