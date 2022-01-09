import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-companypage',
  templateUrl: 'companyPage.component.html'
})

export class CompanyPageComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Флексибейс - Разработчик IT-решений в сфере здравоохранения');
  }
}
