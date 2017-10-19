import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-selected-pizza-dialog',
  templateUrl: './selected-pizza-dialog.component.html',
  styleUrls: ['./selected-pizza-dialog.component.css']
})
export class SelectedPizzaDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Entities.Pizza) {}

  ngOnInit() {
  }

}
