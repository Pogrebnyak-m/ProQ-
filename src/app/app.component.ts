import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProQ';
  constructor(
    private router: Router
  ) {
    router.events.subscribe( event => {
      if (event instanceof NavigationEnd){
        setTimeout(() => {
          document.documentElement.scrollTop = 0;
        }, 1);
      }
    });
  }
}
