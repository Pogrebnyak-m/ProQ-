import { Component, OnInit } from '@angular/core';
import { points } from './points';

@Component({
  selector: 'app-project1-list',
  templateUrl: './project1-list.component.html',
  styleUrls: ['./project1-list.component.scss']
})
export class Project1ListComponent implements OnInit {
  points = points;

  constructor() { }

  ngOnInit(): void {
  }

}
