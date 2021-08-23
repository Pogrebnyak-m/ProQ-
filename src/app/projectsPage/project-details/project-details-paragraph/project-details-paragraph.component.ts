import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-details-paragraph',
  templateUrl: './project-details-paragraph.component.html',
  styleUrls: ['./project-details-paragraph.component.scss']
})
export class ProjectDetailsParagraphComponent implements OnInit {
  @Input() paragraph = {name: '', text: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
