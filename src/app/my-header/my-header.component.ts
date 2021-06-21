import { Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']  
})
export class MyHeaderComponent {
  
  constructor(public dialog: MatDialog) {}


  img: string = 'assets/images/ladalogo.png'; 
  openDialog(): void
  {
    const dialogRef = this.dialog.open(MyHeaderDialog, {
      width: '250px'      
    });
  }
}


@Component({
  selector: 'dialog',
  templateUrl: './my-header-dialog.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderDialog {
  constructor(
    public dialogRef: MatDialogRef<MyHeaderDialog>    
  ){}
  
  onNOClick(): void{
    this.dialogRef.close();
  }

}