import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { NeoswRoutingModule } from './neosw-routing.module';
import { NeoswComponent } from './neosw.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [NeoswComponent],
  imports: [
    NeoswRoutingModule,
    ReactiveFormsModule,

    MatButtonModule,
    NgxDaterangepickerMd.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  providers: [MatDatepickerModule]
})
export class NeoswModule {}
