import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('Pruebas Unitarias', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('el componente existe', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  });


  it('debe retornar formulario inválido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
     
  const usuario = component.formulario.controls['usuario']
  usuario.setValue('lucas@gmail.com')
  
  expect(component.formulario.invalid).toBeFalse();
  });
});
