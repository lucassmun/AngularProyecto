import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  constructor(
   private store: Store<Sesion>
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectSesionActiva);
  }

}
