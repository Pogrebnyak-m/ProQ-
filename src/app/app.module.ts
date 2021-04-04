import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FirstTitleComponent } from './title/title.component';
import { ContentComponent } from './content/content.component';
import { HolderComponent } from './holder/holder.component';
import { CompanyComponent } from './company/company.component';
import { ClientsPartnersComponent } from './clients/clients-partners.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule} from '@angular/material/tabs';

/*import { MatIconModule } from '@angular/material/icon';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';*/



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
    FooterComponent
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
    MatTabsModule
    /*MatIconModule
    MatDividerModule,
    MatButtonModule*/
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
    /*MatIconModule
    MatDividerModule,
    MatButtonModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
