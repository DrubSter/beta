import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { OnTableService } from 'src/app/services/OnTable.service'; 

@Component({
  selector: 'app-my-header-dialog',
  templateUrl: './my-header-dialog.component.html',
  styleUrls: ['./my-header-dialog.component.css']
})
export class MyHeaderDialogComponent {
  MyGroup: FormGroup = new FormGroup({});
  public tableOn: boolean = false;

  constructor(public dialogRef: MatDialogRef<MyHeaderDialogComponent>, private readonly TableService: OnTableService) { 
    this.MyForm()
  }




  public MyForm ()
  {
    this.MyGroup = new FormGroup({
      mail: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onNOClick(): void{
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.MyGroup.value);
    this.TableService.changeCount(true);  
    this.dialogRef.close();
  }

}
