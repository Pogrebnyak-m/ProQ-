import { Component, OnInit } from '@angular/core';
import { comments } from './comments';

@Component({
  selector: 'app-project1-note',
  templateUrl: './project1-note.component.html',
  styleUrls: ['./project1-note.component.scss']
})
export class Project1NoteComponent implements OnInit {
  comments = comments;

  constructor() { }

  ngOnInit(): void {
  }

}
