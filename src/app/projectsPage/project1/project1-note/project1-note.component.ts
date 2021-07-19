import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-project1-note',
  templateUrl: './project1-note.component.html',
  styleUrls: ['./project1-note.component.scss']
})
export class Project1NoteComponent implements OnInit {
  @Input() comments = [{
    id: 1,
    name: 'Заказчик:',
    description: 'Текст',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
