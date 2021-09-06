import { Component, OnInit } from '@angular/core';
import { solutions } from './solutions';

@Component({
  selector: 'app-projects',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  projects = solutions;
  constructor() { }

  ngOnInit(): void {
  }

}
