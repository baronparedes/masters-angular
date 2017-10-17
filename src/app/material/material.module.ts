import { NgModule } from '@angular/core';
import {
  MatGridListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatIconModule, MatToolbarModule,
  MatExpansionModule, MatFormFieldModule, MatInputModule,
  MatRadioModule
} from '@angular/material';

const modules = [
  MatGridListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatIconModule, MatToolbarModule,
  MatExpansionModule, MatFormFieldModule, MatInputModule,
  MatRadioModule
];

@NgModule({
  exports: modules,
})
export class MaterialModule { }
