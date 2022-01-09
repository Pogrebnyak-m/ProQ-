import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-solutionspage',
  templateUrl: 'solutionsPage.component.html'
})
export class SolutionsPageComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Информационно-аналитическая платформа ProQ');
  }
}
