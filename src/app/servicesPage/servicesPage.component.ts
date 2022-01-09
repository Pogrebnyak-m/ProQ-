import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-servicespage',
  templateUrl: 'servicesPage.component.html'
})
export class ServicesPageComponent implements OnInit{

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Услуги по разработке');
  }
}
