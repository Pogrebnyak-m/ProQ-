import { Component, OnInit } from '@angular/core';
import {ProjectServiceService} from "../project-service.service";

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component implements OnInit {

  constructor(public ps: ProjectServiceService) { }

  ngOnInit(): void {
  }

}
