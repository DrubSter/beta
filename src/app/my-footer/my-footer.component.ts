import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit my-footer')
  }

}
