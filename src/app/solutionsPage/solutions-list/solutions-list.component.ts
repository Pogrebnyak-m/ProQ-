import { Component, OnInit } from '@angular/core';
import { specifications} from '../../homePage/solutions/solutions';

@Component({
  selector: 'app-solutions-list',
  templateUrl: './solutions-list.component.html',
  styleUrls: ['./solutions-list.component.scss']
})
export class SolutionsListComponent implements OnInit {
  specifications = specifications;

  constructor() { }

  ngOnInit(): void {
  }

}
