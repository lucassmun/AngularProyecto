import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatNativeDateModule } from "@angular/material/core";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatSelectModule} from "@angular/material/select";
import { MatTableModule} from "@angular/material/table";
import { MatDialogModule} from "@angular/material/dialog";



@NgModule({

    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTableModule,
        MatDialogModule
    ],

    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTableModule,
        MatDialogModule
    ]

})
export class MaterialModule{}