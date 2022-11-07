import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatNativeDateModule } from "@angular/material/core";


@NgModule({

    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule
    ],

    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule
    ]

})
export class MaterialModule{}