import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CompanyTitleComponent} from '../companyPage/company-title/company-title.component';
import {CompanyListComponent} from '../companyPage/company-list/company-list.component';
import {FooterComponent} from '../homePage/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module')
          .then(module => module.HomeModule)
      },
      {
        path: 'companyPage',
        loadChildren: () => import('./company/company.module')
          .then(module => module.CompanyModule)
      },
      {
        path: 'projectsPage',
        loadChildren: () => import('./projects/projects.module')
          .then(module => module.ProjectsModule)
      },
      {
        path: 'projectsPage/projects',
        loadChildren: () => import('./projects/project1/project1.module')
          .then(module => module.Project1Module)
      },
      {
        path: 'solutionsPage',
        loadChildren: () => import('./iap/iap.module')
          .then(module => module.IAPModule)
      },
      {
        path: 'servicesPage',
        loadChildren: () => import('./services/services.module')
          .then(module => module.ServicesModule)
      },
      {
        path: 'footer',
        loadChildren: () => import('./footer/footer.module')
          .then(module => module.FooterModule)
      },
    ])
  ]
})
export class WebsiteModule { }
