import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ListaCursosComponent } from './lista-cursos.component';

describe('CursosListasComponent', () => {
  let component: ListaCursosComponent;
  let fixture: ComponentFixture<ListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCursosComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se crea el componente', () => {
    expect(component).toBeTruthy();
  });

 

});
