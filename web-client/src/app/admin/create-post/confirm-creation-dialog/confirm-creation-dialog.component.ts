import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-confirm-creation-dialog',
  templateUrl: './confirm-creation-dialog.component.html',
  styleUrls: ['./confirm-creation-dialog.component.scss']
})
export class ConfirmCreationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmCreationDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {}

  ngOnInit() {}
}

export class ConfirmDialogData {
  // postWC: string;
  // averageWC: string;
  // taglingWC: string;
  // averageTaglineWC: string;

  constructor(
    public postWC: string,
    public averageWC: string,
    public taglineWC: string,
    public averageTaglineWC: string
  ) {}
}
