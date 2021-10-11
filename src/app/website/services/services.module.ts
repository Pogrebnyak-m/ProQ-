import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CompanyPageComponent} from '../../companyPage/companyPage.component';
import {ServicesPageComponent} from '../../servicesPage/servicesPage.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ServicesPageComponent,
      }
    ])
  ]
})
export class ServicesModule { }
