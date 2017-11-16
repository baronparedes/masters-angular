import { Directive, ElementRef, EventEmitter, HostListener, Output, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Directive({
  selector: '[confirm]'
})
export class ConfirmDirective {
  @Output() confirm = new EventEmitter<any>();

  constructor(private el: ElementRef, public dialog: MatDialog) { }

  @HostListener('click')
  onClick(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.confirm.emit();
      }
    });

  }
}

@Component({
  template:
  `<h2 mat-dialog-title>Confirm</h2>
  <mat-dialog-content>Are you sure?</mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button mat-dialog-close>No</button>
    <button mat-raised-button [mat-dialog-close]="true" color="primary">Yes</button>
  </mat-dialog-actions>`
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<any>) { }
}
