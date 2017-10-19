import { NgModule } from '@angular/core';
import {
  MatGridListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatIconModule, MatToolbarModule,
  MatExpansionModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatDialogModule
} from '@angular/material';

const modules = [
  MatGridListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatIconModule, MatToolbarModule,
  MatExpansionModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatDialogModule
];

@NgModule({
  exports: modules,
})
export class MaterialModule { }
