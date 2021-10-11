import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProjectsPageComponent} from '../../projectsPage/projectsPage.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProjectsPageComponent,
      },
      {
        path: 'projects',
        pathMatch: 'full',
        loadChildren: () => import('./project1/project1.module')
          .then(module => module.Project1Module)
      },
    ])
  ]
})
export class ProjectsModule { }
