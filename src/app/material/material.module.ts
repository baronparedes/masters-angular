import { NgModule } from '@angular/core';
import {
  MatGridListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatIconModule, MatToolbarModule
} from '@angular/material';

const modules = [
  MatGridListModule, MatButtonModule, MatCardModule,
  MatMenuModule, MatIconModule, MatToolbarModule
];

@NgModule({
  exports: modules,
})
export class MaterialModule { }
