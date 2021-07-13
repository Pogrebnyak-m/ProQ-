import { Component, OnInit } from '@angular/core';
import { careers } from './careers';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  careers = careers;
  constructor() { }

  ngOnInit(): void {
  }

}
