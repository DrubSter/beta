import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MyHeaderDialogComponent } from './my-header-dialog/my-header-dialog.component';



@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']  
})
export class MyHeaderComponent {
  constructor(public dialog: MatDialog) {      
  } 

  img: string = 'assets/images/ladalogo.png'; 
  openDialog(): void
  {
    const dialogRef = this.dialog.open(MyHeaderDialogComponent, {
      width: '250px'      
    });
  }
}


