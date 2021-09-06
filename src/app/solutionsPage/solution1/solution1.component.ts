import {Component, OnInit} from '@angular/core';
import { solutions } from '../../homePage/solutions/solutions';

@Component({
  selector: 'app-solution1',
  templateUrl: 'solution1.component.html'
})

export class Solution1Component implements OnInit {
  solutions = solutions;

  constructor() { }

  ngOnInit(): void {
  }

}
