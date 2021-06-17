import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']  
})
export class MyHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dialog: string = "none";
  img: string = 'assets/images/angular.png'; 
  openDialog()
  {
      this.dialog = "open";
  }
}
