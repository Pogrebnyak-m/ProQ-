import { Component, OnInit } from '@angular/core';
import { elements } from './elements';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.scss']
})
export class SolutionListComponent implements OnInit {
  elements = elements;
  constructor() { }

  ngOnInit(): void {
  }

}
