import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-title',
  templateUrl: './solution-title.component.html',
  styleUrls: ['./solution-title.component.scss']
})
export class SolutionTitleComponent implements OnInit {

  @Input() data = {title: '', text: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
