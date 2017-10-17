import { NgModule } from '@angular/core';
import {
  MatGridListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatIconModule, MatToolbarModule,
  MatExpansionModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

const modules = [
  MatGridListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatIconModule, MatToolbarModule,
  MatExpansionModule, MatFormFieldModule, MatInputModule
];

@NgModule({
  exports: modules,
})
export class MaterialModule { }
