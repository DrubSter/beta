import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header-dialog',
  templateUrl: './my-header-dialog.component.html',
  styleUrls: ['./my-header-dialog.component.css']
})
export class MyHeaderDialogComponent implements OnInit {
  dialogRef: any;

  constructor() { }

  ngOnInit() {
  }
 onNOClick(): void{
    this.dialogRef.close();
  }

}
