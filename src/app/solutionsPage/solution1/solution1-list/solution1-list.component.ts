import { Component, OnInit } from '@angular/core';
import { elements } from './elements';

@Component({
  selector: 'app-solution1-list',
  templateUrl: './solution1-list.component.html',
  styleUrls: ['./solution1-list.component.scss']
})
export class Solution1ListComponent implements OnInit {
  elements = elements;
  constructor() { }

  ngOnInit(): void {
  }

}
