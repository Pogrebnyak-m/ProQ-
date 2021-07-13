import { Component, OnInit } from '@angular/core';
import { technologies } from './technologies';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  technologies = technologies;

  constructor() { }

  ngOnInit(): void {
  }

}
