import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project1-list',
  templateUrl: './project1-list.component.html',
  styleUrls: ['./project1-list.component.scss']
})
export class Project1ListComponent implements OnInit {
  @Input() data = {title: '', points: [{
      id: 1,
      name: 'Заголовок',
      mark: '01',
      description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
    }]};


  ngOnInit(): void {
  }

}
