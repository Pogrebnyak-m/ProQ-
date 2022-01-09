import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-projectspage',
  templateUrl: 'projectsPage.component.html'
})
export class ProjectsPageComponent implements OnInit{
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Проекты в сфере здравоохранения');
  }
}
