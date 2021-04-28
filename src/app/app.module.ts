import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './homePage/main/main.component';
import { FirstTitleComponent } from './homePage/title/title.component';
import { ContentComponent } from './homePage/content/content.component';
import { HolderComponent } from './homePage/holder/holder.component';
import { CompanyComponent } from './homePage/company/company.component';
import { ClientsPartnersComponent } from './homePage/clients/clients-partners.component';
import { ProjectsComponent } from './homePage/projects/projects.component';
import { FooterComponent } from './homePage/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { ServicesPageComponent } from './servicesPage/servicesPage.component';
import { ServicesTitleComponent } from './servicesPage/services-title/services-title.component';
import { ServicesListComponent } from './servicesPage/services-list/services-list.component';
import { TechnologiesComponent } from './servicesPage/technologies/technologies.component';
import { SolutionsPageComponent } from './solutionsPage/solutionsPage.component';
import { SolutionsTitleComponent } from './solutionsPage/solutions-title/solutions-title.component';
import { SolutionsListComponent } from './solutionsPage/solutions-list/solutions-list.component';
import { ProjectsPageComponent } from './projectsPage/projectsPage.component';
import { CompanyPageComponent } from './companyPage/companyPage.component';
import { CompanyTitleComponent } from './companyPage/company-title/company-title.component';
import { CompanyListComponent } from './companyPage/company-list/company-list.component';
import { ProjectsTitleComponent } from './projectsPage/projects-title/projects-title.component';
import { ProjectsListComponent } from './projectsPage/projects-list/projects-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { Solution1Component } from './solutionsPage/solution1/solution1.component';
import { Solution2Component } from './solutionsPage/solution2/solution2.component';
import { Solution3Component } from './solutionsPage/solution3/solution3.component';
import { Solution1TitleComponent } from './solutionsPage/solution1/solution1-title/solution1-title.component';
import { Solution1ContentComponent } from './solutionsPage/solution1/solution1-content/solution1-content.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

/*import { MatIconModule } from '@angular/material/icon';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';*/

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'solutions', component: SolutionsPageComponent},
  {path: 'company', component: CompanyPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'solution1', component: Solution1Component},
  {path: 'solution2', component: Solution2Component},
  {path: 'solution3', component: Solution3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    FirstTitleComponent,
    ContentComponent,
    HolderComponent,
    CompanyComponent,
    ClientsPartnersComponent,
    ProjectsComponent,
    FooterComponent,
    ServicesPageComponent,
    HomePageComponent,
    ServicesTitleComponent,
    ServicesListComponent,
    TechnologiesComponent,
    SolutionsPageComponent,
    SolutionsTitleComponent,
    SolutionsListComponent,
    ProjectsPageComponent,
    CompanyPageComponent,
    CompanyTitleComponent,
    CompanyListComponent,
    ProjectsTitleComponent,
    ProjectsListComponent,
    Solution1Component,
    Solution2Component,
    Solution3Component,
    Solution1TitleComponent,
    Solution1ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    /*MatRadioModule,*/
    RouterModule.forRoot(routes)
    /*MatIconModule
    MatDividerModule,
    MatButtonModule*/
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    /*MatRadioModule,*/
    /*MatIconModule
    MatDividerModule,
    MatButtonModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
