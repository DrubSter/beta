import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { OnTableService } from '../services/OnTable.service';

export interface PeriodicElement {
  login: string;
  mail: string;
  password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {login: 'Egor', mail: 'mail', password: 'Roge'},
  {login: 'Egor', mail: 'mail', password: 'Roge'},
  {login: 'Egor', mail: 'mail', password: 'Roge'},
  {login: 'Egor', mail: 'mail', password: 'Roge'},
  {login: 'Egor', mail: 'mail', password: 'Roge'},
];

@Component({
  selector: 'my-body',
  templateUrl: './my-body.component.html',
  styleUrls: ['./my-body.component.css']
})
export class MyBodyComponent implements OnInit, AfterViewInit {
  constructor(private readonly TableService: OnTableService) {}

  TableOn: boolean = false;

  displayedColumns: string[] = ['login', 'mail', 'password'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
      this.TableService.count$.subscribe((count) => this.showTable(count))
  }

  showTable(count: boolean): void {
    console.log(count);
    this.TableOn = count;
  }

  

}
