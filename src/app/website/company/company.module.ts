import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CompanyPageComponent} from '../../companyPage/companyPage.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CompanyPageComponent,
      },
    ])
  ]
})
export class CompanyModule { }
