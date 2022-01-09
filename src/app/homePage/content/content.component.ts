import { Component, OnInit } from '@angular/core';
import { items } from './items';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  items = items;
  constructor() { }

  ngOnInit(): void {
  }

  Navigate(link: string = '') {
    try {
      if (link.length > 0) {
        window.open(link, '_blank');
      }

    } catch (e) {

    }
  }

}
