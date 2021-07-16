import { Component, OnInit } from '@angular/core';
import { services } from './services';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent {
  services = services;
}
