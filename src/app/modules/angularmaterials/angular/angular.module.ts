import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatGridListModule, MatCheckboxModule, MatInputModule,MatIconModule,MatFormFieldModule, MatToolbarModule,
   
  MatCardModule,
  
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  
  MatProgressSpinnerModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule, MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class AngularModule { }
