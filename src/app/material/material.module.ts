import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule
} from '@angular/material';

const modules = [
  NoopAnimationsModule,
  MatGridListModule
];

@NgModule({
  exports: modules,
})
export class MaterialModule { }
