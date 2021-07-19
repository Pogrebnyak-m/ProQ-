import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-details-list',
  templateUrl: './project-details-list.component.html',
  styleUrls: ['./project-details-list.component.scss']
})
export class ProjectDetailsListComponent implements OnInit {
  @Input() data = {title: '', points: [{
      id: 1,
      name: 'Заголовок',
      mark: '01',
      description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
    }]};


  ngOnInit(): void {
  }

}
