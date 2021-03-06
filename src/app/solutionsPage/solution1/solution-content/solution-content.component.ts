import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-content',
  templateUrl: './solution-content.component.html',
  styleUrls: ['./solution-content.component.scss']
})
export class SolutionContentComponent implements OnInit {

  @Input()   data = {
  id: 1,
  name: 'Информационно-аналитическая платформа ProQ (ИАП ProQ)',
  description: 'Современная ETL – система, совместимая с медицинской информационной системой qMS,\n' +
  'предназначена для консолидации, последующей обработки и\n' +
  'визуализации данных из медицинских информационных систем, баз данных и других источников.' +
  ' Данное решение, способствует высоким темпам развития интеграционных, научных и аналитических задач. Интегрируем ИАП ProQ с МИС, учётными и складскими системами, c CRM, с системами документооборота, а также с комплексными ERP-системами.',
  demo: 'http://proq.software/demo/',
  video: '../../../assets/img/VideoKonsolidatia.mp4',
  videoStop: '../../../assets/img/VideoKonsolidatia_Moment.jpg',
  imgPage: '../../../assets/img/proqProekt.png',
  imgMain: '../../../assets/img/Konsolidatiya.png',
  commentsName2: 'АРХИТЕКТУРА',
  imgDetali: '../../../assets/img/arxitectyra.png',
  comments: [
    {
      id: 1,
      description: 'Консолидация данных из МИС qMS и других внешних источников;',
    },
    // {
    //     id: 2,
    //     description: 'Сокращение времени проведения научных и аналитических исследований;',
    // },
    {
      id: 2,
      description: 'Значительная экономия времени и ресурсов для проведения научных и аналитических' +
      'исследований благодаря доступности данных;',
    },
{
  id: 3,
  description: 'Использование сторонних систем помощи принятия врачебных решений;',
},
{
  id: 4,
    description: 'Мониторинг деятельности медицинской организации в режиме реального времени.',
},
],
comments2:
  [
    {
      id: 1,
      description: 'Каждый модуль может существовать независимо друг от друга совместно c различными сторонними решениями',
    },
    {
      id: 2,
      description: 'Централизованная панель управленияпрограммного комплекса, с возможностью уведомления системного администратора с использованием мессенджеров',
    },
    {
      id: 3,
      description: 'Современная программная платформа на основе Docker Swarm',
    },
    {
      id: 4,
      description: 'Продолжительность актуализации данных составляет 15 минут;',
    },
    // {
    //   id: 5,
    //   description: 'Высокий уровень автоматизации сложных технологических процессов;',
    // },
    // {
    //   id: 6,
    //   description: 'Минимальная нагрузка на штатных технических специалистов;',
    // },
  ],
    specifications: [
  {
    id: 1,
    name: 'БЛОК ФОРМИРОВАНИЯ ' +
      'ИСТОЧНИКОВ ДАННЫХ',
    description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций',
  },
  {
    id: 2,
    name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' +
      'ОБРАБОТКИ ДАННЫХ',
    description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' +
      'Основная цель – формирование\n' +
      'универсальных запросов к источникам\n' +
      'информации, объединение и обработка\n' +
      'результатов запросов',
  },
  {
    id: 3,
    name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
    description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' +
      'Широкие функциональные возможности.Современный дизайн.' +
      'Высокая скорость изменений.',
  },
  {
    id: 4,
    name: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
    description: 'роцессор от 3000 МГц, кэш от 2 МБ Оперативная память: для 32 битной системы 2Гб, 64 — 4Гб Жесткий диск: скоростью 7200 кэш от 32 гб, лучше ssd.',
  },
],

  opportunities: [{
  id: 1,
  name: 'Консолидация данных из МИС qMS',
  description: 'Деятельность медицинской организации непрерывно связана с формированием ' +
    'отчетной документации, ведением статистического и бухгалтерского учета. Выгрузка данных ' +
    'из медицинской информационной системы – основа этих процессов.\n' +
    'Наше программное обеспечение способно сократить временные издержки на формирование ' +
    'выгрузок до 15 минут благодаря применению инновационных технологий в консолидации данных;\n',
}, {
  id: 2,
  name: 'Конструктор запросов',
  description: 'Сведение таблиц и трансформация данных в них – одна из самых трудоемких ' +
    'задач в подготовке данных, которая в особых случаях требует привлечения программистов.' +
    'Конструктор запросов позволяет автоматизировать процессы формирования требуемых наборов' +
    ' без привлечения IT-специалистов.',
},
  {
    id: 3,
    name: 'Визуализация данных',
    description: 'Сводки информации по отделению позволяют отслеживать состояние пациентов,' +
      ' оперативно принимать решения о необходимости изменения методики лечения, оценивать' +
      ' эффективность деятельности медицинского персонала. Конструктор слайдов позволяет самостоятельно' +
      ' выбрать шаблоны отображения и заполнить их необходимой информацией.Для доступа к аналитике' +
      ' не требуется установка дополнительного ПО: веб-приложение доступно через браузер как на ' +
      'компьютере, так и на мобильных устройствах (планшетах и телефонах).',
  }, {
    id: 4,
    name: 'Глубокая аналитика данных МИС',
    description: 'Доводилось ли Вам делать выборку пациентов, которые принимали указанные' +
      ' препараты на определенном этапе лечения конкретного заболевания? Формирование такой' +
      ' выборки вручную занимает недели в виду необходимости нажатий десятка кнопок графического' +
      ' интерфейса МИС и изучения медицинских записей. Алгоритмы полнотекстового поиска позволяют ' +
      'решать такие задачи за считанные минуты.',
  },
  {
    id: 5,
    name: 'Разработка и интеграция сторонних систем помощи принятия врачебных решений',
    description: 'Систематизация накопленных знаний и компетенций позволяет повысить' +
      ' качество оказываемой медицинской помощи, сократить издержки и повысить эффективность ' +
      'работы медицинского учреждения. Комплексные СППВР достаточно сложно интегрировать в' +
      ' функциональные процессы МИС, однако алгоритмы консолидации данных могут обеспечить ' +
      'алгоритмы машинного обучения  необходимыми данными, а пациентов – правильным и ' +
      'своевременным врачебным решением. Наш совместный проект с ВЦЭРМ по ранней диагностике ' +
      'сепсиса является наглядным подтверждением эффективности применяемого подхода.',
  },
  {
    id: 6,
    name: 'Мониторинг программного комплекса',
    description: 'Сбои в работе программного и аппаратного обеспечения случаются в самый' +
      ' неподходящий момент. Используемые технологии и инструменты мониторинга позволяют' +
      ' не только своевременно отслеживать необходимые параметры, но и уведомлять системного' +
      ' администратора по почте и в мессенджерах;',
  },
  {
    id: 7,
    name: 'Автоматизация тестирования, доставки и установки обновлений',
    description: 'Рутинные процессы тестирования, доставки и установки ' +
      'обновлений тратят много сил и времени. Автоматизация этих процессов ' +
      'позволила избежать многочисленных временных задержек и ошибок, а также ' +
      'сократила время запуска новой версии ПО с нескольких часов до 5 минут;',
  },
],
};
  constructor() { }

  ngOnInit(): void {
  }

}
