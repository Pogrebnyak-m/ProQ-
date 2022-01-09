import { Component, OnInit } from '@angular/core';
import {ProjectDataService} from "../project-data.service";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(
    public ps: ProjectDataService,
    private route: ActivatedRoute,
    private titleService: Title) { }
  public row = {
    id: 1,
    name: 'Ошибка 404',
    description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
    descriptionFull: 'Похоже, что Вы не туда попали....',
    img: '../../../assets/img/image%2015.svg',
    comments: [
      {
        id: 1,
        name: '',
        description: 'Попробуйте вернуться на страницу проектов и выбрать проект из списка',
      },

    ],
    partition1: {
      title: 'Почему так случилось?',
      points:
        [
          {
            id: 1,
            name: 'Заголовок',
            mark: '01',
            description: 'Ваша ссылка устарела или не работает',
          },
          {
            id: 2,
            name: 'Заголовок',
            mark: '02',
            description: 'Опечатка при вводе ссылке в адресную строку',
          },
          {
            id: 3,
            name: 'Заголовок',
            mark: '03',
            description: 'Ошибка на сайте',
          },
          {
            id: 4,
            name: 'Заголовок',
            mark: '04',
            description: 'Неудачная хакерская атака',
          },
        ]
    },
    paragraph: {
      name: 'Нашли ошибку на сайте?',
      text: 'Напишите нам на почту или в форму обратной связи! Мы будем рады Вашей помощи!'
    },
  };
  ngOnInit(): void {
    let tmp = this.route.snapshot.paramMap.get('name');
    var rowArray = this.ps.Projects.filter(proj => proj.name === tmp);
    if (rowArray.length > 0 ){
      this.row = rowArray[0];
    }
    this.titleService.setTitle(this.row.name);
  }

}
