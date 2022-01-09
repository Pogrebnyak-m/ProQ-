import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-homepage',
  templateUrl: 'homePage.component.html',
  styleUrls: ['homePage.component.scss']
})
export class HomePageComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Аналитические решения для МИС qMS');
  }
}
