import { Component, OnInit } from '@angular/core';
import { solutions } from '../../homePage/solutions/solutions';

@Component({
  selector: 'app-solutions-list',
  templateUrl: './solutions-list.component.html',
  styleUrls: ['./solutions-list.component.scss']
})
export class SolutionsListComponent implements OnInit {
  solutions = solutions;

  constructor() { }

  ngOnInit(): void {
  }

}
