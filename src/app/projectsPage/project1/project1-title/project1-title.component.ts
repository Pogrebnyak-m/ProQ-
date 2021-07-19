import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project1-title',
  templateUrl: './project1-title.component.html',
  styleUrls: ['./project1-title.component.scss']
})
export class Project1TitleComponent implements OnInit {
  @Input() data = {name: '', descriptionFull: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
