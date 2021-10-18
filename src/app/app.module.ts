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
import { SolutionsComponent } from './homePage/solutions/solutions.component';
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
import { Solution1Component } from './solutionsPage/solution1/solution1.component';
import { SolutionTitleComponent } from './solutionsPage/solution1/solution-title/solution-title.component';
import { SolutionContentComponent } from './solutionsPage/solution1/solution-content/solution-content.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { SolutionListComponent } from './solutionsPage/solution1/solution1-list/solution-list.component';
import { SolutionParagraphComponent } from './solutionsPage/solution1/solution-paragraph/solution-paragraph.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ProjectDetailsComponent } from './projectsPage/project-details/project-details.component';
import { ProjectDetailsTitleComponent } from './projectsPage/project-details/project-details-title/project-details-title.component';
import { ProjectDetailsListComponent } from './projectsPage/project-details/project-details-list/project-details-list.component';
import { ProjectDetailsNoteComponent } from './projectsPage/project-details/project-details-note/project-details-note.component';
import { ProjectDetailsParagraphComponent } from './projectsPage/project-details/project-details-paragraph/project-details-paragraph.component';
import { DescriptionComponent } from './solutionsPage/description/description.component';
import { SolutionOpportunitiesComponent } from './solutionsPage/solution-opportunities/solution-opportunities.component';
import {Project1Component} from './projectsPage/project1/project1.component';
import {Project1TitleComponent} from './projectsPage/project1/project1-title/project1-title.component';
import {Project1NoteComponent} from './projectsPage/project1/project1-note/project1-note.component';
import {Project1ListComponent} from './projectsPage/project1/project1-list/project1-list.component';
import {Project1ParagraphComponent} from './projectsPage/project1/project1-paragraph/project1-paragraph.component';

/*import { MatIconModule } from '@angular/material/icon';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';*/
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {WebsiteModule} from './website/website.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/*const routes = [
  {path: '', component: HomePageComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'solutions', component: SolutionsPageComponent},
  {path: 'company', component: CompanyPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'solution1', component: Solution1Component},
  {path: 'project', component: ProjectDetailsComponent}
];*/

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
    SolutionsComponent,
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
    SolutionTitleComponent,
    SolutionContentComponent,
    SolutionListComponent,
    SolutionParagraphComponent,
    ProjectDetailsComponent,
    ProjectDetailsTitleComponent,
    ProjectDetailsListComponent,
    ProjectDetailsNoteComponent,
    ProjectDetailsParagraphComponent,
    DescriptionComponent,
    SolutionOpportunitiesComponent,
    Project1Component,
    Project1TitleComponent,
    Project1NoteComponent,
    Project1ListComponent,
    Project1ParagraphComponent
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
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    LazyLoadImageModule,
    /*RouterModule.forRoot(routes),*/
    WebsiteModule
    /*MatIconModule
    MatDividerModule,
    MatButtonModule*/
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    /*MatIconModule
    MatDividerModule,
    MatButtonModule*/
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
