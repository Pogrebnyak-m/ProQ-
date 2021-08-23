import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-project-details-note',
  templateUrl: './project-details-note.component.html',
  styleUrls: ['./project-details-note.component.scss']
})
export class ProjectDetailsNoteComponent implements OnInit {
  @Input() comments = [{
    id: 1,
    name: 'Заказчик:',
    description: 'Текст',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
