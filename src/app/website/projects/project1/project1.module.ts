import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProjectsPageComponent} from '../../../projectsPage/projectsPage.component';
import {Project1Component} from '../../../projectsPage/project1/project1.component';
import {ProjectDetailsComponent} from '../../../projectsPage/project-details/project-details.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProjectDetailsComponent,
      },
  ])
    ]
})
export class Project1Module { }
