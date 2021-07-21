import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-paragraph',
  templateUrl: './solution-paragraph.component.html',
  styleUrls: ['./solution-paragraph.component.scss']
})
export class SolutionParagraphComponent implements OnInit {

  @Input() data = {title: '', text: ''}
  constructor() { }

  ngOnInit(): void {
  }

}
