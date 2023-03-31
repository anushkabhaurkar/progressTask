import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  exports:[
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
