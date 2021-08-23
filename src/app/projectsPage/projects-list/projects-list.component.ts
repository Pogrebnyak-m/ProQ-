import {Component} from '@angular/core';
import { ProjectDataService} from "../project-data.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: 'projects-list.component.html',
  styleUrls: ['projects-list.component.scss'],
})
export class ProjectsListComponent {
  constructor(public ps: ProjectDataService) {
  }
  selected = 'option2';
  cards = this.ps.Projects;
}

