import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-details-title',
  templateUrl: './project-details-title.component.html',
  styleUrls: ['./project-details-title.component.scss']
})
export class ProjectDetailsTitleComponent implements OnInit {
  @Input() data = {name: '', descriptionFull: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
