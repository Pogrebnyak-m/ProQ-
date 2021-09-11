import { Component, OnInit } from '@angular/core';
import { specifications} from './solutions';

@Component({
  selector: 'app-projects',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  projects = specifications;
  constructor() { }

  ngOnInit(): void {
  }

}
