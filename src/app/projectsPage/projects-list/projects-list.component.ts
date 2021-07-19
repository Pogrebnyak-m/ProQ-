import {Component} from '@angular/core';
import { ProjectServiceService} from "../project-service.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: 'projects-list.component.html',
  styleUrls: ['projects-list.component.scss'],
})
export class ProjectsListComponent {
  constructor(public ps: ProjectServiceService) {
  }
  selected = 'option2';
  cards = this.ps.Projects;
}

