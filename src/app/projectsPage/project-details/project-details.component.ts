import { Component, OnInit } from '@angular/core';
import {ProjectDataService} from "../project-data.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(public ps: ProjectDataService, private route: ActivatedRoute,) { }
  public row = {
    id: 1,
    name: 'Ошибка 404',
    description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
    descriptionFull: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
    img: '../../../assets/img/image%2015.svg',
    comments: [
      {
        id: 1,
        name: 'Заказчик:',
        description: 'Текст',
      },
      {
        id: 2,
        name: 'Решение:',
        description: 'Текст',
      },
      {
        id: 3,
        name: 'Заголовок:',
        description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
      },
      {
        id: 4,
        name: 'Технологии:',
        description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
      },
    ],
    partition1: {
      title: 'Подзаголовок1',
      points:
        [
          {
            id: 1,
            name: 'Заголовок',
            mark: '01',
            description: 'ПJJJJJвседневная практика показывает, что выбранный нами инновационный путь...',
          },
          {
            id: 2,
            name: 'Заголовок',
            mark: '02',
            description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
          },
          {
            id: 3,
            name: 'Заголовок',
            mark: '03',
            description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
          },
          {
            id: 4,
            name: 'Заголовок',
            mark: '04',
            description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
          },
        ]
    },
    paragraph: {
      name: 'Параграф',
      text: 'Текст который тут будет'
    },
  };
  ngOnInit(): void {
    var tmp = this.route.snapshot.paramMap.get('name');
    var rowArray = this.ps.Projects.filter(proj => proj.name === tmp);
    if (rowArray.length > 0 ){
      this.row = rowArray[0];
    }
  }

}