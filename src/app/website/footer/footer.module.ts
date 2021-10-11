import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CompanyPageComponent} from '../../companyPage/companyPage.component';
import {FooterComponent} from '../../homePage/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: FooterComponent,
      }
    ])
  ]
})
export class FooterModule { }
