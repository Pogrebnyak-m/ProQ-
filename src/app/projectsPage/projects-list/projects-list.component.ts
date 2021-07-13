import {Component} from '@angular/core';
import { cards } from './cards';

@Component({
  selector: 'app-projects-list',
  templateUrl: 'projects-list.component.html',
  styleUrls: ['projects-list.component.scss'],
})
export class ProjectsListComponent {
  selected = 'option2';
  cards = cards;
}

