import { NgModule } from "@angular/core";

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';



@NgModule({

    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ],

    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ]

})
export class MaterialModule{}