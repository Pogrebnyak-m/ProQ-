import { Component, OnInit } from '@angular/core';
import { objects } from './objects';

@Component({
  selector: 'app-solution1-content',
  templateUrl: './solution1-content.component.html',
  styleUrls: ['./solution1-content.component.scss']
})
export class Solution1ContentComponent implements OnInit {
  objects = objects;

  constructor() { }

  ngOnInit(): void {
  }

}
