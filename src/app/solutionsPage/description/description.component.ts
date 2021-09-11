import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  comments = [
    {
      id: 1,
      description: 'Консолидация данных из МИС qMS и других внешних источников;',
    },
    {
      id: 2,
      description: 'Значительная экономия времени и ресурсов для проведения научных и аналитических исследований благодаря доступности данных;',
    }, {
      id: 3,
      description: 'Использование сторонних систем помощи принятия врачебных решений;',
    },
    {
      id: 4,
      description: 'Мониторинг деятельности медицинской организации в режиме реального времени.',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
