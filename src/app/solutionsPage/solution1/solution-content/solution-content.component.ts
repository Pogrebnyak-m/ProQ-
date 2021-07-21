import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-content',
  templateUrl: './solution-content.component.html',
  styleUrls: ['./solution-content.component.scss']
})
export class SolutionContentComponent implements OnInit {
  @Input() data = {title: '', objects: [{
      id: 3,
      name: 'Заголовок',
      mark: '03',
      description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
    },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
