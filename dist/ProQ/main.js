"use strict";
(self["webpackChunkProQ"] = self["webpackChunkProQ"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
        enableTracing: false,
        scrollPositionRestoration: 'top'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 1105);




class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'ProQ';
    router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        setTimeout(() => {
          document.documentElement.scrollTop = 0;
        }, 1);
      }
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "mat-typography"], [1, "container"], [1, "container_1"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _homePage_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homePage/main/main.component */ 9414);
/* harmony import */ var _homePage_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homePage/title/title.component */ 1717);
/* harmony import */ var _homePage_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homePage/content/content.component */ 8946);
/* harmony import */ var _homePage_holder_holder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homePage/holder/holder.component */ 7450);
/* harmony import */ var _homePage_company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homePage/company/company.component */ 9808);
/* harmony import */ var _homePage_clients_clients_partners_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homePage/clients/clients-partners.component */ 734);
/* harmony import */ var _homePage_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homePage/solutions/solutions.component */ 1947);
/* harmony import */ var _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homePage/footer/footer.component */ 5675);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/tabs */ 3177);
/* harmony import */ var _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homePage/homePage.component */ 7032);
/* harmony import */ var _servicesPage_servicesPage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicesPage/servicesPage.component */ 4619);
/* harmony import */ var _servicesPage_services_title_services_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./servicesPage/services-title/services-title.component */ 92);
/* harmony import */ var _servicesPage_services_list_services_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./servicesPage/services-list/services-list.component */ 805);
/* harmony import */ var _servicesPage_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./servicesPage/technologies/technologies.component */ 9928);
/* harmony import */ var _solutionsPage_solutionsPage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./solutionsPage/solutionsPage.component */ 2511);
/* harmony import */ var _solutionsPage_solutions_title_solutions_title_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./solutionsPage/solutions-title/solutions-title.component */ 7211);
/* harmony import */ var _solutionsPage_solutions_list_solutions_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./solutionsPage/solutions-list/solutions-list.component */ 9881);
/* harmony import */ var _projectsPage_projectsPage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projectsPage/projectsPage.component */ 3958);
/* harmony import */ var _companyPage_companyPage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./companyPage/companyPage.component */ 6734);
/* harmony import */ var _companyPage_company_title_company_title_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./companyPage/company-title/company-title.component */ 7351);
/* harmony import */ var _companyPage_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./companyPage/company-list/company-list.component */ 792);
/* harmony import */ var _projectsPage_projects_title_projects_title_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./projectsPage/projects-title/projects-title.component */ 6723);
/* harmony import */ var _projectsPage_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./projectsPage/projects-list/projects-list.component */ 8456);
/* harmony import */ var _solutionsPage_solution1_solution1_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./solutionsPage/solution1/solution1.component */ 2373);
/* harmony import */ var _solutionsPage_solution1_solution_title_solution_title_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./solutionsPage/solution1/solution-title/solution-title.component */ 3082);
/* harmony import */ var _solutionsPage_solution1_solution_content_solution_content_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./solutionsPage/solution1/solution-content/solution-content.component */ 3738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/radio */ 6287);
/* harmony import */ var _solutionsPage_solution1_solution1_list_solution_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./solutionsPage/solution1/solution1-list/solution-list.component */ 4285);
/* harmony import */ var _solutionsPage_solution1_solution_paragraph_solution_paragraph_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./solutionsPage/solution1/solution-paragraph/solution-paragraph.component */ 8387);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _projectsPage_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./projectsPage/project-details/project-details.component */ 6097);
/* harmony import */ var _projectsPage_project_details_project_details_title_project_details_title_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./projectsPage/project-details/project-details-title/project-details-title.component */ 8715);
/* harmony import */ var _projectsPage_project_details_project_details_list_project_details_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./projectsPage/project-details/project-details-list/project-details-list.component */ 2902);
/* harmony import */ var _projectsPage_project_details_project_details_note_project_details_note_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./projectsPage/project-details/project-details-note/project-details-note.component */ 572);
/* harmony import */ var _projectsPage_project_details_project_details_paragraph_project_details_paragraph_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./projectsPage/project-details/project-details-paragraph/project-details-paragraph.component */ 3091);
/* harmony import */ var _solutionsPage_description_description_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./solutionsPage/description/description.component */ 211);
/* harmony import */ var _solutionsPage_solution_opportunities_solution_opportunities_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./solutionsPage/solution-opportunities/solution-opportunities.component */ 8022);
/* harmony import */ var _projectsPage_project1_project1_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./projectsPage/project1/project1.component */ 6117);
/* harmony import */ var _projectsPage_project1_project1_title_project1_title_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./projectsPage/project1/project1-title/project1-title.component */ 2913);
/* harmony import */ var _projectsPage_project1_project1_note_project1_note_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./projectsPage/project1/project1-note/project1-note.component */ 3471);
/* harmony import */ var _projectsPage_project1_project1_list_project1_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./projectsPage/project1/project1-list/project1-list.component */ 1803);
/* harmony import */ var _projectsPage_project1_project1_paragraph_project1_paragraph_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./projectsPage/project1/project1-paragraph/project1-paragraph.component */ 4385);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-lazyload-image */ 3624);
/* harmony import */ var _website_website_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./website/website.module */ 776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ 2560);





















































/*import { MatIconModule } from '@angular/material/icon';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';*/




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
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_44__.LocationStrategy,
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_44__.PathLocationStrategy
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_50__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_51__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_53__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_55__.MatSelectModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_56__.LazyLoadImageModule, /*RouterModule.forRoot(routes),*/
      _website_website_module__WEBPACK_IMPORTED_MODULE_42__.WebsiteModule
      /*MatIconModule
      MatDividerModule,
      MatButtonModule*/, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_51__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_53__.MatRadioModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _homePage_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent, _homePage_title_title_component__WEBPACK_IMPORTED_MODULE_4__.FirstTitleComponent, _homePage_content_content_component__WEBPACK_IMPORTED_MODULE_5__.ContentComponent, _homePage_holder_holder_component__WEBPACK_IMPORTED_MODULE_6__.HolderComponent, _homePage_company_company_component__WEBPACK_IMPORTED_MODULE_7__.CompanyComponent, _homePage_clients_clients_partners_component__WEBPACK_IMPORTED_MODULE_8__.ClientsPartnersComponent, _homePage_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_9__.SolutionsComponent, _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _servicesPage_servicesPage_component__WEBPACK_IMPORTED_MODULE_12__.ServicesPageComponent, _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_11__.HomePageComponent, _servicesPage_services_title_services_title_component__WEBPACK_IMPORTED_MODULE_13__.ServicesTitleComponent, _servicesPage_services_list_services_list_component__WEBPACK_IMPORTED_MODULE_14__.ServicesListComponent, _servicesPage_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_15__.TechnologiesComponent, _solutionsPage_solutionsPage_component__WEBPACK_IMPORTED_MODULE_16__.SolutionsPageComponent, _solutionsPage_solutions_title_solutions_title_component__WEBPACK_IMPORTED_MODULE_17__.SolutionsTitleComponent, _solutionsPage_solutions_list_solutions_list_component__WEBPACK_IMPORTED_MODULE_18__.SolutionsListComponent, _projectsPage_projectsPage_component__WEBPACK_IMPORTED_MODULE_19__.ProjectsPageComponent, _companyPage_companyPage_component__WEBPACK_IMPORTED_MODULE_20__.CompanyPageComponent, _companyPage_company_title_company_title_component__WEBPACK_IMPORTED_MODULE_21__.CompanyTitleComponent, _companyPage_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_22__.CompanyListComponent, _projectsPage_projects_title_projects_title_component__WEBPACK_IMPORTED_MODULE_23__.ProjectsTitleComponent, _projectsPage_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_24__.ProjectsListComponent, _solutionsPage_solution1_solution1_component__WEBPACK_IMPORTED_MODULE_25__.Solution1Component, _solutionsPage_solution1_solution_title_solution_title_component__WEBPACK_IMPORTED_MODULE_26__.SolutionTitleComponent, _solutionsPage_solution1_solution_content_solution_content_component__WEBPACK_IMPORTED_MODULE_27__.SolutionContentComponent, _solutionsPage_solution1_solution1_list_solution_list_component__WEBPACK_IMPORTED_MODULE_28__.SolutionListComponent, _solutionsPage_solution1_solution_paragraph_solution_paragraph_component__WEBPACK_IMPORTED_MODULE_29__.SolutionParagraphComponent, _projectsPage_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_30__.ProjectDetailsComponent, _projectsPage_project_details_project_details_title_project_details_title_component__WEBPACK_IMPORTED_MODULE_31__.ProjectDetailsTitleComponent, _projectsPage_project_details_project_details_list_project_details_list_component__WEBPACK_IMPORTED_MODULE_32__.ProjectDetailsListComponent, _projectsPage_project_details_project_details_note_project_details_note_component__WEBPACK_IMPORTED_MODULE_33__.ProjectDetailsNoteComponent, _projectsPage_project_details_project_details_paragraph_project_details_paragraph_component__WEBPACK_IMPORTED_MODULE_34__.ProjectDetailsParagraphComponent, _solutionsPage_description_description_component__WEBPACK_IMPORTED_MODULE_35__.DescriptionComponent, _solutionsPage_solution_opportunities_solution_opportunities_component__WEBPACK_IMPORTED_MODULE_36__.SolutionOpportunitiesComponent, _projectsPage_project1_project1_component__WEBPACK_IMPORTED_MODULE_37__.Project1Component, _projectsPage_project1_project1_title_project1_title_component__WEBPACK_IMPORTED_MODULE_38__.Project1TitleComponent, _projectsPage_project1_project1_note_project1_note_component__WEBPACK_IMPORTED_MODULE_39__.Project1NoteComponent, _projectsPage_project1_project1_list_project1_list_component__WEBPACK_IMPORTED_MODULE_40__.Project1ListComponent, _projectsPage_project1_project1_paragraph_project1_paragraph_component__WEBPACK_IMPORTED_MODULE_41__.Project1ParagraphComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_47__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_50__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_51__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_53__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_55__.MatSelectModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_56__.LazyLoadImageModule, /*RouterModule.forRoot(routes),*/
    _website_website_module__WEBPACK_IMPORTED_MODULE_42__.WebsiteModule
    /*MatIconModule
    MatDividerModule,
    MatButtonModule*/],
    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_51__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_53__.MatRadioModule]
  });
})();

/***/ }),

/***/ 7677:
/*!*****************************************************!*\
  !*** ./src/app/companyPage/company-list/careers.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "careers": () => (/* binding */ careers)
/* harmony export */ });
const careers = [{
  id: 1,
  data_bs_target: 'collapseOne',
  aria_expanded: 'true',
  aria_controls: 'collapseOne',
  aria_labelledby: 'headingOne',
  name: 'Вакансия1',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 2,
  data_bs_target: 'collapseTwo',
  aria_expanded: 'false',
  aria_controls: 'collapseTwo',
  aria_labelledby: 'headingTwo',
  name: 'Вакансия2',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 3,
  data_bs_target: 'collapseThree',
  aria_expanded: 'false',
  aria_controls: 'collapseThree',
  aria_labelledby: 'headingThree',
  name: 'Вакансия3',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 4,
  data_bs_target: 'collapseFour',
  aria_expanded: 'false',
  aria_controls: 'collapseFour',
  aria_labelledby: 'headingFour',
  name: 'Вакансия4',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 5,
  data_bs_target: 'collapseFive',
  aria_expanded: 'false',
  aria_controls: 'collapseFive',
  aria_labelledby: 'headingFive',
  name: 'Вакансия5',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}];

/***/ }),

/***/ 792:
/*!********************************************************************!*\
  !*** ./src/app/companyPage/company-list/company-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListComponent": () => (/* binding */ CompanyListComponent)
/* harmony export */ });
/* harmony import */ var _careers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./careers */ 7677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CompanyListComponent {
  constructor() {
    this.careers = _careers__WEBPACK_IMPORTED_MODULE_0__.careers;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function CompanyListComponent_Factory(t) {
      return new (t || CompanyListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompanyListComponent,
      selectors: [["app-company-list"]],
      decls: 329,
      vars: 0,
      consts: [[1, "company_list"], [1, "company_wrap"], [1, "text_wrap"], [1, "text"], [1, "container-fluid"], [1, "row"], [1, "col-12", "col-sm-6", "col_wrap1"], ["id", "accordionFirstCol", 1, "accordion", "accordion-flush"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "accordion-button", "collapsed", "description"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionFirstCol", 1, "accordion-collapse", "collapse"], [1, "accordion-body", "description"], ["id", "headingOne-2", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne-2", "aria-expanded", "false", "aria-controls", "collapseOne-2", 1, "accordion-button", "collapsed", "description"], ["id", "collapseOne-2", "aria-labelledby", "headingOne-2", "data-bs-parent", "#accordionFirstCol", 1, "accordion-collapse", "collapse"], ["id", "headingOne-3", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne-3", "aria-expanded", "false", "aria-controls", "collapseOne-2", 1, "accordion-button", "collapsed", "description"], ["id", "collapseOne-3", "aria-labelledby", "headingOne-3", "data-bs-parent", "#accordionFirstCol", 1, "accordion-collapse", "collapse"], [1, "col-12", "col-sm-6", "col_wrap2"], ["id", "accordionSecondCol", 1, "accordion", "accordion-flush"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed", "description"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionSecondCol", 1, "accordion-collapse", "collapse"], ["id", "headingTwo-1", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo-1", "aria-expanded", "false", "aria-controls", "collapseTwo-1", 1, "accordion-button", "collapsed", "description"], ["id", "collapseTwo-1", "aria-labelledby", "headingTwo-1", "data-bs-parent", "#accordionSecondCol", 1, "accordion-collapse", "collapse"], ["id", "headingTwo-2", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo-2", "aria-expanded", "false", "aria-controls", "collapseTwo-2", 1, "accordion-button", "collapsed", "description"], ["id", "collapseTwo-2", "aria-labelledby", "headingTwo-2", "data-bs-parent", "#accordionSecondCol", 1, "accordion-collapse", "collapse"]],
      template: function CompanyListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "h2", 9)(11, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " DevOps - \u0438\u043D\u0436\u0435\u043D\u0435\u0440 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "p")(16, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "- \u0412\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C\u0438 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "- \u0421\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u0432\u043D\u0435\u0434\u0440\u044F\u0435\u043C\u044B\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "- \u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445 \u043A\u043E\u043C\u0430\u043D\u0434\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p")(25, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "- \u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u0421I/CD ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "- Linux (Debian/Ubuntu/CentOS) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "- Docker, Docker Compose, Docker Swarm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "- Git ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "- Elasticsearch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "- Prometheus ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "- Grafana ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "- Yandex Cloud ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "- \u041E\u043F\u044B\u0442 \u043E\u0442 2\u0445 \u043B\u0435\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p")(46, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u0411\u0443\u0434\u0435\u0442 \u043F\u043B\u044E\u0441\u043E\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "- Atlassian (Jira,Confluence) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "- MySQL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "- iptables/ufw ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p")(55, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "- \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430\u0434 \u043D\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "- \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043A\u0430\u0440\u044C\u0435\u0440\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "- \u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0440\u0430\u0431\u043E\u0442\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " \u041F\u0440\u043E\u0441\u044C\u0431\u0430 \u0432\u044B\u0441\u044B\u043B\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u044F \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 8)(66, "h2", 13)(67, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Golang - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A (Middle) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15)(70, "div", 12)(71, "p")(72, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "- \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u043A ElasticSearch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "- \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "- \u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u0434\u0430 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "- \u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p")(83, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "- \u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442-\u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "- \u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u043F\u0430\u0440\u0430\u043B\u0435\u043B\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "- \u0417\u043D\u0430\u043D\u0438\u0435 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "- \u0427\u0438\u0441\u0442\u044B\u0439 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u043A\u043E\u0434 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "- Linux (Debian/Ubuntu/CentOS) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "- Elasticsearch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "- Git ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "- gRPC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "- \u041E\u043F\u044B\u0442 \u043E\u0442 2\u0445 \u043B\u0435\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p")(104, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\u0411\u0443\u0434\u0435\u0442 \u043F\u043B\u044E\u0441\u043E\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "- Atlassian (Jira,Confluence) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "- SQL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p")(111, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "- \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430\u0434 \u043D\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "- \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043A\u0430\u0440\u044C\u0435\u0440\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "- \u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0440\u0430\u0431\u043E\u0442\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " \u041F\u0440\u043E\u0441\u044C\u0431\u0430 \u0432\u044B\u0441\u044B\u043B\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u044F \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 8)(122, "h2", 16)(123, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Golang - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A (Senior) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 18)(126, "div", 12)(127, "p")(128, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "- \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u043A ElasticSearch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "- \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "- \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "- \u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "p")(139, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "- \u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442-\u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "- \u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u043F\u0430\u0440\u0430\u043B\u0435\u043B\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "- \u0413\u043B\u0443\u0431\u043E\u043A\u043E\u0435 \u0437\u043D\u0430\u043D\u0438\u0435 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "- \u0427\u0438\u0441\u0442\u044B\u0439 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u043A\u043E\u0434 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "- \u041F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0440\u0435\u0432\u044C\u044E ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "- \u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "- Linux (Debian/Ubuntu/CentOS) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "- Elasticsearch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "- Git ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "- gRPC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "- \u041E\u043F\u044B\u0442 \u043E\u0442 4\u0445 \u043B\u0435\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p")(164, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "\u0411\u0443\u0434\u0435\u0442 \u043F\u043B\u044E\u0441\u043E\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "- Atlassian (Jira,Confluence) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "- SQL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "p")(171, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "- \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430\u0434 \u043D\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "- \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043A\u0430\u0440\u044C\u0435\u0440\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "- \u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0440\u0430\u0431\u043E\u0442\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, " \u041F\u0440\u043E\u0441\u044C\u0431\u0430 \u0432\u044B\u0441\u044B\u043B\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u044F \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 19)(182, "div", 20)(183, "div", 8)(184, "h2", 21)(185, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " Data Scientist ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 23)(188, "div", 12)(189, "p")(190, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "- \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u043A ElasticSearch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "- \u0420\u0430\u0437\u043C\u0435\u0442\u043A\u0430 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "- \u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 BigData ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "- \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "- \u0412\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "- \u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "p")(205, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "- NLP ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "- \u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u043E\u0432 ML ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "- \u0427\u0438\u0441\u0442\u044B\u0439 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u043A\u043E\u0434 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "- Linux (Debian/Ubuntu/CentOS) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "- Elasticsearch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "- Git ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "- \u041E\u043F\u044B\u0442 \u043E\u0442 2\u0445 \u043B\u0435\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "p")(222, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "\u0411\u0443\u0434\u0435\u0442 \u043F\u043B\u044E\u0441\u043E\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "- Atlassian (Jira,Confluence) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "- SQL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "p")(229, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "- \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430\u0434 \u043D\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "- \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043A\u0430\u0440\u044C\u0435\u0440\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "- \u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0440\u0430\u0431\u043E\u0442\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, " \u041F\u0440\u043E\u0441\u044C\u0431\u0430 \u0432\u044B\u0441\u044B\u043B\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u044F \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 8)(240, "h2", 24)(241, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " \u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0449\u0438\u043A (Frontend) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 26)(244, "div", 12)(245, "p")(246, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "- \u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "- \u0412\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "- \u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "p")(255, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "- \u0417\u043D\u0430\u043D\u0438\u044F HTML/CSS/JS ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "- Karma ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "- Jasmine ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "- \u0427\u0438\u0441\u0442\u044B\u0439 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u043A\u043E\u0434 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "- Git ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "- \u041E\u043F\u044B\u0442 \u043E\u0442 1 \u0433\u043E\u0434\u0430 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "p")(270, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "\u0411\u0443\u0434\u0435\u0442 \u043F\u043B\u044E\u0441\u043E\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "- Atlassian (Jira,Confluence) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "p")(275, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "- \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430\u0434 \u043D\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "- \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043A\u0430\u0440\u044C\u0435\u0440\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "- \u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0440\u0430\u0431\u043E\u0442\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, " \u041F\u0440\u043E\u0441\u044C\u0431\u0430 \u0432\u044B\u0441\u044B\u043B\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u044F \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 8)(286, "h2", 27)(287, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, " \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 29)(290, "div", 12)(291, "p")(292, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "- \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "- \u0412\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "- \u0424\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "p")(301, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "- \u0423\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C Microsoft Office ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "- \u0423\u0441\u0438\u0434\u0447\u0438\u0432\u043E\u0441\u0442\u044C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "- \u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043A \u0434\u0435\u0442\u0430\u043B\u044F\u043C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](309, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "- \u0416\u0438\u0432\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u043A IT-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "- \u041E\u043F\u044B\u0442 \u043E\u0442 1 \u0433\u043E\u0434\u0430 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "p")(314, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "\u0411\u0443\u0434\u0435\u0442 \u043F\u043B\u044E\u0441\u043E\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "- Atlassian (Jira,Confluence) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "p")(319, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "- \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430\u0434 \u043D\u043E\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](323, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "- \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043A\u0430\u0440\u044C\u0435\u0440\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "- \u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0440\u0430\u0431\u043E\u0442\u044B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, " \u041F\u0440\u043E\u0441\u044C\u0431\u0430 \u0432\u044B\u0441\u044B\u043B\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435 \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u044F \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
      },
      styles: [".company_list[_ngcontent-%COMP%] {\n  \n}\n\n.company_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n}\n\n.col_wrap1[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.col_wrap2[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n.text_wrap[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.accordion-button[_ngcontent-%COMP%] {\n  color: #001B4A;\n  background-color: rgba(0, 27, 74, 0.08);\n}\n\n.accordion-body[_ngcontent-%COMP%] {\n  background-color: rgba(0, 27, 74, 0.08);\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n  border: none;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  font-weight: 400;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .col_wrap1[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .col_wrap2[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcGFueVBhZ2UvY29tcGFueS1saXN0L2NvbXBhbnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO29CQUFBO0FBRUY7O0FBQ0E7RUFDQTtzQkFBQTtFQUVFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0FBSUY7O0FBRkE7RUFDQSxVQUFBO0FBS0E7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0FBTUY7O0FBSkE7RUFDRSx1Q0FBQTtBQU9GOztBQUxBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVNGOztBQU5BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVNGO0VBUEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVNGO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFTRjtFQVBBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFTRjtBQUNGO0FBUEE7RUFDRTtJQUNFLGVBQUE7RUFTRjtFQVBBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBU0Y7QUFDRjtBQVBBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFTRjtFQVBBO0lBQ0UsZ0JBQUE7RUFTRjtFQVBBO0lBQ0UsZUFBQTtFQVNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueV9saXN0e1xyXG4gIC8qbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7Ki9cclxufVxyXG4uY29tcGFueV93cmFwe1xyXG4vKiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7Ki9cclxuICBwYWRkaW5nOiAwIDYlO1xyXG59XHJcbi5jb2xfd3JhcDF7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5jb2xfd3JhcDJ7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG4udGV4dF93cmFwe1xyXG5wYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5hY2NvcmRpb24tYnV0dG9ue1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjcsIDc0LCAwLjA4KTtcclxufVxyXG4uYWNjb3JkaW9uLWJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNywgNzQsIDAuMDgpO1xyXG59XHJcbi5hY2NvcmRpb24taXRlbXtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB9XHJcbiAgLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbiAgLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICAuY29sX3dyYXAxe1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbiAgLmNvbF93cmFwMntcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7351:
/*!**********************************************************************!*\
  !*** ./src/app/companyPage/company-title/company-title.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyTitleComponent": () => (/* binding */ CompanyTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CompanyTitleComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CompanyTitleComponent_Factory(t) {
      return new (t || CompanyTitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyTitleComponent,
      selectors: [["app-company-title"]],
      decls: 26,
      vars: 0,
      consts: [[1, "company_title"], [1, "company_wrap"], [1, "part"], [1, "company"], [1, "text"], [1, "textabout"], [1, "company_text"]],
      template: function CompanyTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u041E\u041E \"\u0424\u043B\u0435\u043A\u0441\u0438\u0431\u0435\u0439\u0441\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br")(7, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0421\u043E\u0437\u0434\u0430\u0451\u043C \u0418\u0422-\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br")(14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041D\u0430\u0448\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u2014 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0435\u0442\u0438\u043F\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0441 \u0432\u044B\u0441\u043E\u043A\u0438\u043C\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043A \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0443 \u041F\u041E. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br")(17, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0438 \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432 \u0441\u0444\u0435\u0440\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br")(20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0412 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043C\u043E\u043B\u043E\u0434\u044B\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B, \u043E\u043A\u043E\u043D\u0447\u0438\u0432\u0448\u0438\u0435 \u043B\u0443\u0447\u0448\u0438\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0432\u0443\u0437\u044B \u0441\u0442\u0440\u0430\u043D\u044B \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0435 \u0441\u0430\u043C\u044B\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044B \u043A \u0440\u0430\u0431\u043E\u0442\u0435. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br")(23, "br")(24, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u043A\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0438 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: [".company_title[_ngcontent-%COMP%] {\n  \n  background: rgba(214, 231, 238, 0.26);\n}\n\n.company_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n  margin-bottom: 3%;\n}\n\n.company[_ngcontent-%COMP%] {\n  padding: 3% 0 0;\n  \n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.textabout[_ngcontent-%COMP%] {\n  padding: 2% 0 4%;\n}\n\n.company_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 980px) {\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcGFueVBhZ2UvY29tcGFueS10aXRsZS9jb21wYW55LXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7b0JBQUE7RUFFQSxxQ0FBQTtBQUNGOztBQUNBO0VBQ0U7b0JBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQTtvQkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQU1GOztBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFPRjtBQUNGO0FBTEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBT0Y7QUFDRjtBQUxBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFPRjtBQUNGO0FBTEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBT0Y7RUFMQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU9GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueV90aXRsZXtcclxuICAvKm1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDI5MHB4OyovXHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIzMSwgMjM4LCAwLjI2KTtcclxufVxyXG4uY29tcGFueV93cmFwe1xyXG4gIC8qbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7Ki9cclxuICBwYWRkaW5nOiAwIDYlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5jb21wYW55e1xyXG4gIHBhZGRpbmc6IDMlIDAgMDtcclxuICAvKm1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMyMHB4OyovXHJcbn1cclxuLnRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZXh0YWJvdXR7XHJcbiAgcGFkZGluZzogMiUgMCA0JTtcclxufVxyXG4uY29tcGFueV90ZXh0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxuICAuY29tcGFueV90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC5jb21wYW55X3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAuY29tcGFueV90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbiAgLmNvbXBhbnlfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6734:
/*!******************************************************!*\
  !*** ./src/app/companyPage/companyPage.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyPageComponent": () => (/* binding */ CompanyPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homePage/footer/footer.component */ 5675);
/* harmony import */ var _company_title_company_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-title/company-title.component */ 7351);
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-list/company-list.component */ 792);





class CompanyPageComponent {
  constructor(titleService) {
    this.titleService = titleService;
  }
  ngOnInit() {
    this.titleService.setTitle('Флексибейс - Разработчик IT-решений в сфере здравоохранения');
  }
  static {
    this.ɵfac = function CompanyPageComponent_Factory(t) {
      return new (t || CompanyPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CompanyPageComponent,
      selectors: [["app-companypage"]],
      decls: 4,
      vars: 0,
      consts: [[1, "companyPage"]],
      template: function CompanyPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-company-title")(2, "app-company-list")(3, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _company_title_company_title_component__WEBPACK_IMPORTED_MODULE_1__.CompanyTitleComponent, _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_2__.CompanyListComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 734:
/*!****************************************************************!*\
  !*** ./src/app/homePage/clients/clients-partners.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsPartnersComponent": () => (/* binding */ ClientsPartnersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ 3624);


class ClientsPartnersComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ClientsPartnersComponent_Factory(t) {
      return new (t || ClientsPartnersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsPartnersComponent,
      selectors: [["app-clients-partners"]],
      decls: 32,
      vars: 18,
      consts: [[1, "clients_partners"], [1, "holder_wrap"], [1, "customers_title"], [1, "text"], ["id", "carouselExampleSlidesOnly", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["data-bs-interval", "7000", 1, "carousel-item", "active"], [1, "item_container"], [1, "client_logo"], ["alt", "...", 1, "d-block", "item_img", 3, "defaultImage", "lazyLoad"], ["data-bs-interval", "2000", 1, "carousel-item"], [1, "carousel-item"]],
      template: function ClientsPartnersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B \u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "div", 7)(18, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11)(25, "div", 7)(26, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/sparm-min.png")("lazyLoad", "../../../assets/img/sparm.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/enc-min.png")("lazyLoad", "../../../assets/img/enc.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/NRCERM-min.png")("lazyLoad", "../../../assets/img/NRCERM.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/enc-min.png")("lazyLoad", "../../../assets/img/enc.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/NRCERM-min.png")("lazyLoad", "../../../assets/img/NRCERM.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/starthub-min.png")("lazyLoad", "../../../assets/img/starthub.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/NRCERM-min.png")("lazyLoad", "../../../assets/img/NRCERM.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/starthub-min.png")("lazyLoad", "../../../assets/img/starthub.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/armit-min.png")("lazyLoad", "../../../assets/img/armit.png");
        }
      },
      dependencies: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImageDirective],
      styles: [".holder_wrap[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 290px;\n  \n  padding: 0 6%;\n  margin: 7% auto 4%;\n}\n\n.customers_title[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 290px;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  padding: 1% 0 0;\n}\n\n.item_container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-column-gap: 4%;\n  text-align: center;\n}\n\n.client_logo[_ngcontent-%COMP%] {\n  padding: 0 4%;\n  text-align: center;\n}\n\n.item_img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 160px;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n    font-weight: 400;\n  }\n  .item_img[_ngcontent-%COMP%] {\n    width: 140px;\n  }\n}\n@media (max-width: 768px) {\n  .holder_wrap[_ngcontent-%COMP%] {\n    padding: 3% 6% 5%;\n    margin: 0;\n  }\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n    font-weight: 400;\n  }\n  .item_img[_ngcontent-%COMP%] {\n    width: 120px;\n  }\n}\n@media (max-width: 580px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n    font-weight: 400;\n  }\n  .client_logo[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n  }\n  .item_img[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2UvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUFNRjtFQUpBO0lBQ0UsWUFBQTtFQU1GO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxTQUFBO0VBS0Y7RUFIQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUFLRjtFQUhBO0lBQ0UsWUFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQUtGO0VBSEE7SUFDRSxVQUFBO0lBQ0EsU0FBQTtFQUtGO0VBSEE7SUFDRSxXQUFBO0VBS0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ob2xkZXJfd3JhcHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDtcclxuICAvKnBhZGRpbmc6IDQlIDYlIDQlOyovXHJcbiAgcGFkZGluZzogMCA2JTtcclxuICBtYXJnaW46IDclIGF1dG8gNCU7XHJcbn1cclxuLmN1c3RvbWVyc190aXRsZXtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDtcclxufVxyXG4udGV4dHtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICBwYWRkaW5nOiAxJSAwIDA7XHJcbn1cclxuLml0ZW1fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA0JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNsaWVudF9sb2dve1xyXG4gIHBhZGRpbmc6IDAgNCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbV9pbWd7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAuaXRlbV9pbWcge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhvbGRlcl93cmFwe1xyXG4gICAgcGFkZGluZzogMyUgNiUgNSU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLml0ZW1faW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmNsaWVudF9sb2dvIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5pdGVtX2ltZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9808:
/*!*******************************************************!*\
  !*** ./src/app/homePage/company/company.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyComponent": () => (/* binding */ CompanyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CompanyComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CompanyComponent_Factory(t) {
      return new (t || CompanyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyComponent,
      selectors: [["app-company"]],
      decls: 17,
      vars: 0,
      consts: [[1, "company"], [1, "company_wrap"], [1, "part"], [1, "company_title"], [1, "text"], [1, "company_container"], [1, "rectangle_wrap"], ["id", "rectangle"], [1, "about_company"], [1, "text_wrap"], [1, "company_text"]],
      template: function CompanyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435\u043C \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043C\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0437\u0430\u043A\u0430\u0437\u043D\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430\u0448\u0435\u0433\u043E \u043A\u0430\u0434\u0440\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0430 - \u0432\u044B\u0434\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438 \u043B\u0443\u0447\u0448\u0438\u0445 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0412\u0423\u0417\u043E\u0432 \u0441\u0442\u0440\u0430\u043D\u044B.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041C\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0412\u0430\u043C \u0432 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
      },
      styles: ["@charset \"UTF-8\";\n.company_title[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 280px;\n  margin-top: 4%;\n  padding-left: 6%;\n  padding-bottom: 2%;\n}\n\n.about_company[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\n\n.company_container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.company_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n}\n\n.text_wrap[_ngcontent-%COMP%] {\n  padding: 0 20% 0 27%;\n  margin: 0;\n}\n\n.part[_ngcontent-%COMP%] {\n  padding-bottom: 6%;\n}\n\n\n.rectangle_wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 2%;\n}\n\n#rectangle[_ngcontent-%COMP%] {\n  width: 790px;\n  height: 160px;\n  background: rgba(214, 231, 238, 0.26);\n}\n\n@media (max-width: 1800px) {\n  .text_wrap[_ngcontent-%COMP%] {\n    padding: 0 16% 0 20%;\n  }\n  #rectangle[_ngcontent-%COMP%] {\n    width: 530px;\n    height: 140px;\n  }\n  .part[_ngcontent-%COMP%] {\n    padding-bottom: 8%;\n  }\n}\n@media (max-width: 1500px) {\n  #rectangle[_ngcontent-%COMP%] {\n    width: 450px;\n  }\n  .text_wrap[_ngcontent-%COMP%] {\n    padding: 0 10% 0 20%;\n  }\n  .part[_ngcontent-%COMP%] {\n    padding-bottom: 10%;\n  }\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .rectangle_wrap[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n}\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .text_wrap[_ngcontent-%COMP%] {\n    padding: 0 6% 0 13%;\n  }\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 20px;\n  }\n  #rectangle[_ngcontent-%COMP%] {\n    width: 420px;\n    height: 120px;\n  }\n  .part[_ngcontent-%COMP%] {\n    padding-bottom: 12%;\n  }\n  \n}\n@media (max-width: 980px) {\n  img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n  .part[_ngcontent-%COMP%] {\n    margin-bottom: 8%;\n  }\n  #rectangle[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 120px;\n  }\n  .rectangle_wrap[_ngcontent-%COMP%] {\n    margin-top: 4%;\n  }\n  .text_wrap[_ngcontent-%COMP%] {\n    padding: 0 6%;\n  }\n  \n}\n@media (max-width: 768px) {\n  .company_title[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    margin-left: 0;\n  }\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .text_wrap[_ngcontent-%COMP%] {\n    padding: 0 6%;\n  }\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  #rectangle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .part[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n  .company_container[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .about_company[_ngcontent-%COMP%] {\n    position: static;\n  }\n  \n  \n}\n@media (max-width: 580px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .company_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2UvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7Ozs7Ozs7RUFBQTtBQVFBO0VBQ0Usa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7QUFPRjs7QUFKQSxnQkFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0FBT0Y7O0FBSkE7RUFDRTtJQUNFLG9CQUFBO0VBT0Y7RUFMQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBT0Y7RUFMQTtJQUNFLGtCQUFBO0VBT0Y7QUFDRjtBQUxBO0VBQ0U7SUFDRSxZQUFBO0VBT0Y7RUFMQTtJQUNFLG9CQUFBO0VBT0Y7RUFMQTtJQUNFLG1CQUFBO0VBT0Y7RUFMQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU9GO0VBTEE7SUFDRSxjQUFBO0VBT0Y7QUFDRjtBQUxBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0VBTEE7SUFDRSxtQkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFPRjtFQUxBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFPRjtFQUxBO0lBQ0UsbUJBQUE7RUFPRjtFQUxEOztLQUFBO0FBU0Q7QUFMQTtFQUNFO0lBQ0UsYUFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0VBTEE7SUFDRSxpQkFBQTtFQU9GO0VBTEE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQU9GO0VBTEE7SUFDRSxjQUFBO0VBT0Y7RUFMQTtJQUNFLGFBQUE7RUFPRjtFQUxEOztLQUFBO0FBU0Q7QUFMQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGNBQUE7RUFPRjtFQUxBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFPRjtFQUxBO0lBQ0UsYUFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFPRjtFQUxBO0lBQ0UsYUFBQTtFQU9GO0VBTEE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VBT0Y7RUFMQTtJQUNFLGdCQUFBO0VBT0Y7RUFMQTtJQUNFLGdCQUFBO0VBT0Y7RUFMRDs7S0FBQTtFQUdEOzs7TUFBQTtBQVVBO0FBTEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBT0Y7RUFMQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU9GO0VBTEY7OztNQUFBO0FBVUE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55X3RpdGxle1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIHBhZGRpbmctbGVmdDogNiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcbi5hYm91dF9jb21wYW55e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udGV4dHtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi8qISrDkcKAw5DCsMOQwrHDkMK+w5HCgsOQwrDDkMK1w5HCgiDDkcKBIMOQwrrDkMKww5HCgMORwoLDkMK4w5DCvcOQwrrDkMK+w5DCuSohXHJcbi5pbWdfd3JhcHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmNvbXBhbnlfaW1nIHtcclxuICBoZWlnaHQ6IDIzdmg7XHJcbn0qL1xyXG4uY29tcGFueV9jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb21wYW55X3RleHR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50ZXh0X3dyYXB7XHJcbiAgcGFkZGluZzogMCAyMCUgMCAyNyU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5wYXJ0e1xyXG4gIHBhZGRpbmctYm90dG9tOiA2JTtcclxufVxyXG5cclxuLyrDkMKfw5DCoMOQwq/DkMKcw5DCnsOQwqPDkMKTw5DCnsOQwpvDkMKsw5DCncOQwpjDkMKaKi9cclxuXHJcbi5yZWN0YW5nbGVfd3JhcHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuI3JlY3RhbmdsZSB7XHJcbiAgd2lkdGg6IDc5MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIzMSwgMjM4LCAwLjI2KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE4MDBweCkge1xyXG4gIC50ZXh0X3dyYXB7XHJcbiAgICBwYWRkaW5nOiAwIDE2JSAwIDIwJTtcclxuICB9XHJcbiAgI3JlY3RhbmdsZSB7XHJcbiAgICB3aWR0aDogNTMwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gIH1cclxuICAucGFydHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICNyZWN0YW5nbGUge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gIH1cclxuICAudGV4dF93cmFwe1xyXG4gICAgcGFkZGluZzogMCAxMCUgMCAyMCU7XHJcbiAgfVxyXG4gIC5wYXJ0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbiAgLmNvbXBhbnlfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuICAucmVjdGFuZ2xlX3dyYXB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxuICAudGV4dF93cmFwe1xyXG4gICAgcGFkZGluZzogMCA2JSAwIDEzJTtcclxuICB9XHJcbiAgLmNvbXBhbnlfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAjcmVjdGFuZ2xlIHtcclxuICAgIHdpZHRoOiA0MjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG4gIC5wYXJ0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEyJTtcclxuICB9XHJcbiAvKiAudGV4dF93cmFwe1xyXG4gICAgcGFkZGluZzogMCAxNSU7XHJcbiAgfSovXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgaW1ne1xyXG4gICAgZGlzcGxheTpub25lXHJcbiAgfVxyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxuICAuY29tcGFueV90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAucGFydHtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gIH1cclxuICAjcmVjdGFuZ2xlIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG4gIC5yZWN0YW5nbGVfd3JhcHtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gIH1cclxuICAudGV4dF93cmFwe1xyXG4gICAgcGFkZGluZzogMCA2JTtcclxuICB9XHJcbiAvKiAudGV4dF93cmFwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfSovXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbXBhbnlfdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB9XHJcbiAgLnRleHRfd3JhcCB7XHJcbiAgICBwYWRkaW5nOiAwIDYlO1xyXG4gIH1cclxuICAuY29tcGFueV90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gICNyZWN0YW5nbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnBhcnR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5jb21wYW55X2NvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG4gIC5hYm91dF9jb21wYW55e1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICB9XHJcbiAvKiAudGV4dF93cmFwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfSovXHJcbi8qICAuYWJvdXRfY29tcGFueXtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gIH0qL1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbiAgLmNvbXBhbnlfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuLyogIC5hYm91dF9jb21wYW55e1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjFmciAxZnI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgfSovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qLmNvbXBhbnlfd3JhcHtcclxuICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICBtaW4td2lkdGg6IDI5MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDczcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNvbXBhbnlfdGl0bGV7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW4tbGVmdDogNzNweDtcclxufVxyXG4uY29tcGFueV9jb250YWluZXJ7XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAyOTBweDtcclxufVxyXG4uY29tcGFueV9pbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLnRleHR7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY29tcGFueV90ZXh0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmFib3V0X2NvbXBhbnl7XHJcbiAgbWFyZ2luLWxlZnQ6IDM2JTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgfVxyXG4gIC5jb21wYW55X3RleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgfVxyXG4gIC5jb21wYW55X3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAuY29tcGFueV90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbiAgLmNvbXBhbnlfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxufSovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8946:
/*!*******************************************************!*\
  !*** ./src/app/homePage/content/content.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ 4166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ 3624);




function ContentComponent_div_3_div_1_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
  }
}
function ContentComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentComponent_div_3_div_1_h2_4_Template, 2, 1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/loading.png")("lazyLoad", item_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.name);
  }
}
function ContentComponent_div_3_div_2_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
  }
}
function ContentComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentComponent_div_3_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.Navigate(item_r1.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentComponent_div_3_div_2_h2_4_Template, 2, 1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/loading.png")("lazyLoad", item_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.name);
  }
}
function ContentComponent_div_3_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.description);
  }
}
function ContentComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentComponent_div_3_div_1_Template, 5, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContentComponent_div_3_div_2_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentComponent_div_3_h3_4_Template, 2, 1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.link.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.link.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.description);
  }
}
class ContentComponent {
  constructor() {
    this.items = _items__WEBPACK_IMPORTED_MODULE_0__.items;
  }
  ngOnInit() {}
  Navigate(link = '') {
    try {
      if (link.length > 0) {
        window.open(link, '_blank');
      }
    } catch (e) {}
  }
  static {
    this.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 4,
      vars: 1,
      consts: [[1, "content"], [1, "content_wrap"], [1, "row", "justify-content-center", "justify-content-sm-start"], ["class", "col-12 col-md-6 gx-sm-5", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "gx-sm-5"], ["class", "row justify-content-start justify-content-md-between", 4, "ngIf"], ["class", "row justify-content-start justify-content-md-between", "style", "cursor: pointer", 3, "click", 4, "ngIf"], [1, "row", "justify-content-start", "text1_about"], ["class", "description", 4, "ngIf"], [1, "row", "justify-content-start", "justify-content-md-between"], [1, "col-2", "img_wrap"], [1, "img1", 3, "defaultImage", "lazyLoad"], [1, "text1_container", "col-10"], ["class", "text1", 4, "ngIf"], [1, "text1"], [1, "row", "justify-content-start", "justify-content-md-between", 2, "cursor", "pointer", 3, "click"], [1, "description"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContentComponent_div_3_Template, 5, 3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImageDirective],
      styles: [".content_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n  margin: 0 auto 3%;\n}\n\n.content[_ngcontent-%COMP%] {\n  \n  background: #FFFFFF;\n}\n\n.text1[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 600;\n}\n\n.text1_about[_ngcontent-%COMP%] {\n  \n  margin-top: 3%;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n}\n\n.img_wrap[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n@media (max-width: 1200px) {\n  .text1[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text1[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n    margin-bottom: 2%;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n  .text1_about[_ngcontent-%COMP%] {\n    margin-top: 2%;\n  }\n}\n@media (max-width: 768px) {\n  .text1[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .text1_about[_ngcontent-%COMP%] {\n    margin-top: 1%;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .img1[_ngcontent-%COMP%] {\n    width: 30%;\n    margin: auto;\n  }\n  .img_wrap[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media (max-width: 576px) {\n  .text1[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2UvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0M7cUJBQUE7RUFFQyxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNBO3NCQUFBO0VBRUUsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFO29CQUFBO0VBRUEsY0FBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtBQUtGOztBQUZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQUtGO0VBSEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtFQUtGO0VBSEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUtGO0VBSEE7SUFDRSxjQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0U7SUFDRSxlQUFBO0VBS0Y7RUFIQTtJQUNFLGNBQUE7RUFLRjtFQUhBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBS0Y7RUFIQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBS0Y7RUFIQTtJQUNFLFVBQUE7RUFLRjtBQUNGO0FBSEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQUtGO0VBSEE7O0lBQUE7QUFPRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50X3dyYXB7XHJcbiAvKiBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyODBweDsqL1xyXG4gIHBhZGRpbmc6IDAgNiU7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMyU7XHJcbn1cclxuLmNvbnRlbnR7XHJcbi8qICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMjBweDsqL1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi50ZXh0MXtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRleHQxX2Fib3V0e1xyXG4gIC8qbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWluLXdpZHRoOiAyOTBweDsqL1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbi5kZXNjcmlwdGlvbntcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmltZ193cmFwe1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnRleHQxe1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0MXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb257XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICAudGV4dDFfYWJvdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRleHQxe1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGV4dDFfYWJvdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcbiAgLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5pbWcxe1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmltZ193cmFwe1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnRleHQxe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC8qLmNvbnRlbnRfd3JhcCB7XHJcbiAgICBwYWRkaW5nOiAwIDYlO1xyXG4gIH0qL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4166:
/*!*******************************************!*\
  !*** ./src/app/homePage/content/items.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items)
/* harmony export */ });
const items = [{
  id: 1,
  name: 'Интеграция программных систем и продуктов',
  description: 'Умеем писать драйвера и реализовывать протоколы обмена информацией ' + 'даже при отсутствии документации.',
  img: '../../../assets/img/algorithm%202.svg',
  link: ''
}, {
  id: 2,
  name: 'Анализ данных медицинских информационных систем',
  description: 'Проводим научные исследования в целях разработки систем помощи принятия ' + 'врачебных решений.',
  img: '../../../assets/img/api%201.svg',
  link: 'https://ml.proq.software/'
}, {
  id: 3,
  name: 'Разработка веб-приложений',
  description: 'Рисуем дизайн, верстаем по макетам, реализуем бизнес-логику в соответствии' + ' с мировыми стандартами программирования.',
  img: '../../../assets/img/web%201.svg',
  link: ''
}, {
  id: 4,
  name: 'Аутстаффинг',
  description: 'Усилим Вашу команду квалифицированными разработчиками ПО: Cache Object Script, ' + 'Golang, JavaScript.',
  img: '../../../assets/img/file%201.svg',
  link: ''
}, {
  id: 5,
  name: 'Автоматизация бизнес-процессов',
  description: 'Снижаем трудозатраты на рутинные задачи путем автоматизации рабочего процесса.',
  img: '../../../assets/img/software-development%201.svg',
  link: ''
}, {
  id: 6,
  name: 'Проектирование высоконагруженных систем.',
  description: 'Недовольны скоростью работы ПО? Увеличим производительность систем анализа ' + 'и обработки данных.',
  img: '../../../assets/img/network%201.svg',
  link: ''
}];

/***/ }),

/***/ 5675:
/*!*****************************************************!*\
  !*** ./src/app/homePage/footer/footer.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ 3624);




class FooterComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]);
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      email: [''],
      description: ['']
    });
  }
  saveFrom() {
    console.log('Form data is ', this.profileForm.value);
  }
  ngOnInit() {}
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 28,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "row", "w-100"], [1, "w-100", "d-none", "d-md-block"], [1, "col-12", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "contact_info"], [1, "contact_text"], [1, "footer_information"], [1, "contact"], [1, "contact_container"], [1, "contact_form"], [1, "img3", 3, "defaultImage", "lazyLoad"], ["href", "../assets/\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.docx", "\u044B\u0435\u043D\u0434\u0443", ""]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8)(10, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "info@proq.software");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 8)(14, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u041E\u041E\u041E \"\u0424\u043B\u0435\u043A\u0441\u0438\u0431\u0435\u0439\u0441\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \u0418\u041D\u041D: 7733355085");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 8)(19, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0433\u043E\u0440\u043E\u0434 \u041C\u043E\u0441\u043A\u0432\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u043F\u0435\u0440\u0435\u0443\u043B\u043E\u043A \u0410\u043D\u0433\u0435\u043B\u043E\u0432, \u0434\u043E\u043C 6, \u044D\u0442\u0430\u0436 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultImage", "../assets/compressedImg/loading.png")("lazyLoad", "../assets/img/FBlogotip.png");
        }
      },
      dependencies: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImageDirective],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 3% 6%;\n}\n\n.contact_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 3%;\n}\n\n.button_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n}\n\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  border-color: #001B4A;\n}\n\n.contact_form[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n}\n\n.socials[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.footer_socials[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  align-items: flex-start;\n}\n\n.socials_item[_ngcontent-%COMP%] {\n  margin: 0 5% 0 0;\n}\n\n.socials_svg[_ngcontent-%COMP%] {\n  max-width: 60%;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n\n.size-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 300px;\n  width: 100%;\n}\n\n.form-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: cyan;\n}\n\nmat-form-field.mat-form-field[_ngcontent-%COMP%] {\n  color: rgba(0, 27, 74, 0.25);\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 500;\n}\n\n.text1[_ngcontent-%COMP%] {\n  \n  font-size: 10px;\n  line-height: normal;\n  font-weight: 500;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: normal;\n  font-weight: 500;\n  margin-top: -15px;\n}\n\n@media (max-width: 1280px) {\n  mat-form-field.mat-form-field[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  .contact_text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .contact_form[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  mat-form-field.mat-form-field[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 768px) {\n  mat-form-field.mat-form-field[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  .contact_text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  mat-label[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .button_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .second_col[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .form[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n@media (max-width: 576px) {\n  mat-form-field.mat-form-field[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  .contact_text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n    margin-bottom: 0;\n  }\n  .contact_info[_ngcontent-%COMP%] {\n    padding: 4% 1% 2%;\n  }\n  .contact_form[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .socials_item[_ngcontent-%COMP%] {\n    max-width: 20px;\n  }\n  .contact_form[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .contact_container[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .text1[_ngcontent-%COMP%] {\n    \n    font-size: 8px;\n  }\n  .text[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .row[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2UvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUtGOztBQUhBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7QUFRRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUUY7O0FBTkE7O0VBQUE7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBTkE7RUFDRSxXQUFBO0FBU0Y7O0FBUEE7O0VBQUE7QUFJRTtFQUNFLHNCQUFBO0FBU0o7O0FBTEE7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFQQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBVUY7RUFSQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBVUY7RUFSQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBVUY7QUFDRjtBQVJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFVRjtBQUNGO0FBUkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQVVGO0VBUkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVVGO0VBUkE7SUFDRSxlQUFBO0VBVUY7RUFSQTtJQUNFLGVBQUE7RUFVRjtFQVJBO0lBQ0UsZ0JBQUE7RUFVRjtFQVJBO0lBQ0UsZUFBQTtFQVVGO0FBQ0Y7QUFSQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBVUY7RUFSQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFVRjtFQVJBO0lBQ0UsaUJBQUE7RUFVRjtFQVJBO0lBQ0UsZUFBQTtFQVVGO0VBUkE7SUFDRSxlQUFBO0VBVUY7RUFSQTtJQUNFLGdCQUFBO0VBVUY7RUFSQTtJQUNFLG1CQUFBO0VBVUY7RUFSQTtJQUNFLG9CQUFBO0lBQ0EsY0FBQTtFQVVGO0VBUkE7SUFDRSxjQUFBO0VBVUY7RUFQQTtJQUNFLGNBQUE7RUFTRjtBQUNGO0FBSkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFNRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDMlIDYlO1xyXG59XHJcbi5jb250YWN0X3RleHR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5idXR0b25fdGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxufVxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCl7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAxQjRBO1xyXG59XHJcbi5jb250YWN0X2Zvcm17XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5zb2NpYWxze1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4uZm9vdGVyX3NvY2lhbHN7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5zb2NpYWxzX2l0ZW17XHJcbiAgbWFyZ2luOiAwIDUlIDAgMDtcclxufVxyXG4uc29jaWFsc19zdmd7XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLyouZm9ybXtcclxuICBwYWRkaW5nLWxlZnQ6IDMzJTtcclxufSovXHJcbi5zaXplLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyoudGV4dGFyZWFfd3JhcHtcclxuIG1hcmdpbi10b3A6IDUlO1xyXG59Ki9cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xyXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIHtcclxuICBjb2xvcjogcmdiYSgwLCAyNywgNzQsIDAuMjUpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnRleHQxe1xyXG4gIC8qbWFyZ2luLXRvcDogLTRweDsqL1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnRleHR7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuY29udGFjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxuICAuY29udGFjdF9mb3Jte1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5jb250YWN0X3RleHR7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIG1hdC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmJ1dHRvbl90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuc2Vjb25kX2NvbHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5mb3Jte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbiAgLmNvbnRhY3RfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuY29udGFjdF9pbmZve1xyXG4gICAgcGFkZGluZzogNCUgMSUgMiU7XHJcbiAgfVxyXG4gIC5jb250YWN0X2Zvcm17XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5zb2NpYWxzX2l0ZW17XHJcbiAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0X2Zvcm06bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5jb250YWN0X2NvbnRhaW5lcntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC50ZXh0MXtcclxuICAgIC8qbWFyZ2luLXRvcDogLTRweDsqL1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG5cclxuICAucm93e1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7450:
/*!*****************************************************!*\
  !*** ./src/app/homePage/holder/holder.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HolderComponent": () => (/* binding */ HolderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ 3177);


class HolderComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function HolderComponent_Factory(t) {
      return new (t || HolderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HolderComponent,
      selectors: [["app-holder"]],
      decls: 28,
      vars: 0,
      consts: [[1, "holder"], [1, "holder_wrap"], [1, "holder_title"], [1, "text"], [1, "holder_information"], [1, "container"], ["animationDuration", "0ms"], ["label", "\u041A\u043E\u043D\u0441\u043E\u043B\u0438\u0434\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 \u041C\u0418\u0421 qMS"], [1, "about_solution"], ["label", "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445", 1, "name_solution"], ["label", "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0411\u0414"], ["label", "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"], ["label", "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432"], ["label", "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0446\u0435\u043D\u043A\u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u041B\u041F\u0423"]],
      template: function HolderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0420\u0435\u0448\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "mat-tab-group", 6)(8, "mat-tab", 7)(9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041C\u0438\u0433\u0440\u0430\u0446\u0438\u044F \u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445 - \u0441\u043B\u043E\u0436\u043D\u044B\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441, \u0442\u0440\u0435\u0431\u0443\u044E\u0449\u0438\u0439 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u0411\u0414 \u0438 \u0446\u0435\u043B\u043E\u0441\u0442\u043D\u043E\u0441\u0442\u0438 \u043C\u0438\u0433\u0440\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u041D\u0430\u0448\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u043D\u0443\u044E \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044E \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u043E \u0438 \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044E \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0441\u043E\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0438\u0441\u0442\u0435\u043C \u043F\u043E\u043C\u043E\u0449\u0438 \u0432 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0438 \u0432\u0440\u0430\u0447\u0435\u0431\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 9)(12, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043A\u0430\u043A \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043D\u0430 \u043D\u0438\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0438 \u0421\u0423\u0411\u0414, \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0447\u0438\u0441\u0442\u043E\u0442\u044B \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041C\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432\u0430\u043B\u0438\u0434\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0431\u043E\u043B\u0435\u0435 54.000.000 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432 \u043C\u0438\u043D\u0443\u0442\u0443. \u0414\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u0438 \u0448\u0438\u0440\u043E\u043A\u0438\u0445 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C Apache Kafka \u2014 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u044B\u0439 \u0431\u0440\u043E\u043A\u0435\u0440 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439. \u0414\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043C \u0446\u0435\u043B\u0435\u0432\u044B\u0445 \u0421\u0423\u0411\u0414. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab", 10)(17, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0420\u0435\u0448\u0435\u043D\u0438\u04353");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 11)(20, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0438 \u0442\u043E\u0447\u043A\u0438 \u0441\u0431\u043E\u044F \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u0435\u0431-\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u043C \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438: \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044E \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430, \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0442\u043E\u043A\u043E\u0432, \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438 \u0438 \u043D\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 12)(23, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0420\u0435\u0448\u0435\u043D\u0438\u04355");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-tab", 13)(26, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0420\u0435\u0448\u0435\u043D\u0438\u04355");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
      },
      dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__.MatTab],
      styles: [".holder_wrap[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 290px;\n  padding: 0 6%;\n  margin: 0 auto;\n  -webkit-backdrop-filter: blur(1px);\n          backdrop-filter: blur(1px);\n}\n\n.holder[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 320px;\n  background: url('background.svg') center no-repeat;\n  background-size: cover;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 5% 2%;\n}\n\n.holder_title[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 290px;\n  padding-top: 3%;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n}\n\n\n.about_solution[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  padding: 2% 5%;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .about_solution[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .about_solution[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .holder_wrap[_ngcontent-%COMP%] {\n    padding: 0 3%;\n  }\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .about_solution[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 580px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 25px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .about_solution[_ngcontent-%COMP%] {\n    font-size: 7px;\n    line-height: 9px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2UvaG9sZGVyL2hvbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7Ozs7Ozs7O0VBQUE7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTUY7O0FBSEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBTUY7RUFKQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQU1GO0FBQ0Y7QUFKQTtFQUNFO0lBQ0UsYUFBQTtFQU1GO0VBSkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU1GO0VBSkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFNRjtBQUNGO0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBTUY7RUFKQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQU1GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9sZGVyX3dyYXB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7XHJcbiAgcGFkZGluZzogMCA2JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcclxufVxyXG4uaG9sZGVye1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5zdmdcIikgY2VudGVyIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgcGFkZGluZzogNSUgMiU7XHJcbn1cclxuLmhvbGRlcl90aXRsZXtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbn1cclxuLnRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi8qLm5hbWVfc29sdXRpb257XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbn0qL1xyXG4uYWJvdXRfc29sdXRpb257XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDIlIDUlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgfVxyXG4gIC5hYm91dF9zb2x1dGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLmFib3V0X3NvbHV0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhvbGRlcl93cmFwe1xyXG4gICAgcGFkZGluZzogMCAzJTtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC5hYm91dF9zb2x1dGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG4gIC5hYm91dF9zb2x1dGlvbntcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDlweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7032:
/*!************************************************!*\
  !*** ./src/app/homePage/homePage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 9414);
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title/title.component */ 1717);
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ 8946);
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/company.component */ 9808);
/* harmony import */ var _clients_clients_partners_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients/clients-partners.component */ 734);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 5675);








class HomePageComponent {
  constructor(titleService) {
    this.titleService = titleService;
  }
  ngOnInit() {
    this.titleService.setTitle('Аналитические решения для МИС qMS');
  }
  static {
    this.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-homepage"]],
      decls: 7,
      vars: 0,
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-main")(2, "app-first-title")(3, "app-content")(4, "app-company")(5, "app-clients-partners")(6, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent, _title_title_component__WEBPACK_IMPORTED_MODULE_1__.FirstTitleComponent, _content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent, _company_company_component__WEBPACK_IMPORTED_MODULE_3__.CompanyComponent, _clients_clients_partners_component__WEBPACK_IMPORTED_MODULE_4__.ClientsPartnersComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2UvaG9tZVBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59Ki9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9414:
/*!*************************************************!*\
  !*** ./src/app/homePage/main/main.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ 3624);


class MainComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 7,
      vars: 2,
      consts: [[1, "wrap_img"], [1, "header_wrap", 3, "defaultImage", "lazyLoad"], [1, "header_info"], [1, "header_title"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0434\u043B\u044F \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/img/backgroundheaderPreload.jpg")("lazyLoad", "../../../assets/img/backgroundheader.svg");
        }
      },
      dependencies: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImageDirective],
      styles: [".wrap_img[_ngcontent-%COMP%] {\n  \n  max-width: 100%;\n  min-width: 290px;\n  \n  \n  \n  \n}\n\n.header_wrap[_ngcontent-%COMP%] {\n  background: no-repeat center top;\n  background-size: cover;\n}\n\n.header_info[_ngcontent-%COMP%] {\n  padding: 5% 6% 50%;\n}\n\n.header_title[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 63px;\n  letter-spacing: 0.04em;\n  font-weight: 600;\n}\n\n@media (max-width: 1500px) {\n  .header_title[_ngcontent-%COMP%] {\n    font-size: 40px;\n    line-height: 40px;\n    letter-spacing: 0.03em;\n  }\n}\n@media (max-width: 980px) {\n  .header_title[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n}\n@media (max-width: 580px) {\n  .header_title[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0.02em;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2UvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0ZBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQUlGO0FBQ0Y7QUFGQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFJRjtBQUNGO0FBRkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBSUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwX2ltZyB7XHJcbiAgLypiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRoZWFkZXIuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wOyovXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7XHJcbiAgLypoZWlnaHQ6IDEwMCU7Ki9cclxuICAvKmJhY2tncm91bmQtc2l6ZTogY292ZXI7Ki9cclxuICAvKmJhY2tncm91bmQtc2l6ZTogY29udGFpbjsqL1xyXG4gIC8qcGFkZGluZzogMDsqL1xyXG59XHJcbi5oZWFkZXJfd3JhcHtcclxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5oZWFkZXJfaW5mb3tcclxuICBwYWRkaW5nOiA1JSA2JSA1MCU7XHJcbn1cclxuLmhlYWRlcl90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAuaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuaGVhZGVyX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1947:
/*!***********************************************************!*\
  !*** ./src/app/homePage/solutions/solutions.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionsComponent": () => (/* binding */ SolutionsComponent)
/* harmony export */ });
/* harmony import */ var _solutions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solutions */ 6797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-lazyload-image */ 3624);






function SolutionsComponent_div_11_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.name);
  }
}
function SolutionsComponent_div_11_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.description);
  }
}
function SolutionsComponent_div_11_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0414\u0435\u043C\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SolutionsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SolutionsComponent_div_11_p_4_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SolutionsComponent_div_11_p_5_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22)(7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SolutionsComponent_div_11_button_10_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", project_r1.id == 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultImage", project_r1.imgDefault)("lazyLoad", project_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r1 == null ? null : project_r1.demo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.demo);
  }
}
class SolutionsComponent {
  constructor() {
    this.projects = _solutions__WEBPACK_IMPORTED_MODULE_0__.specifications;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SolutionsComponent_Factory(t) {
      return new (t || SolutionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SolutionsComponent,
      selectors: [["app-projects"]],
      decls: 20,
      vars: 1,
      consts: [[1, "projects"], [1, "project_wrap"], [1, "projects_title"], [1, "text"], ["id", "carouselExampleDark", "data-bs-ride", "carousel", 1, "carousel", "carousel-dark", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "5000", 3, "active", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["data-bs-interval", "5000", 1, "carousel-item"], [1, "row", "gx-1", "gx-sm-5", "slider_wrap"], ["alt", "...", 1, "col-12", "col-sm-6", "d-block", "slider_img", 3, "defaultImage", "lazyLoad"], [1, "col-12", "col-sm-6", "text_wrap"], ["class", "project_name", 4, "ngIf"], ["class", "about_project", 4, "ngIf"], [1, "button_group"], ["mat-raised-button", "", "color", "primary", "routerLink", "solutionsPage", 1, "button_text"], [3, "href"], ["mat-stroked-button", "", "color", "primary", "class", "button_text button_text_color ml-3", 4, "ngIf"], [1, "project_name"], [1, "about_project"], ["mat-stroked-button", "", "color", "primary", 1, "button_text", "button_text_color", "ml-3"]],
      template: function SolutionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 ProQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "button", 6)(8, "button", 7)(9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SolutionsComponent_div_11_Template, 11, 8, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__.LazyLoadImageDirective],
      styles: [".carousel-control-next-icon[_ngcontent-%COMP%] {\n  margin-left: 70%;\n}\n\n.carousel-control-prev-icon[_ngcontent-%COMP%] {\n  margin-right: 70%;\n}\n\n.button_text_color[_ngcontent-%COMP%] {\n  color: #001B4A;\n}\n\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  border-color: #001B4A;\n}\n\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #001B4A;\n}\n\n.projects[_ngcontent-%COMP%] {\n  \n  background: rgba(0, 27, 74, 0.08);\n}\n\n.project_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n  margin: 0;\n}\n\n.projects_title[_ngcontent-%COMP%] {\n  \n  padding-top: 3%;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n}\n\n.slider_wrap[_ngcontent-%COMP%] {\n  \n  \n  padding: 3% 0 4%;\n}\n\n.slider_img[_ngcontent-%COMP%] {\n  padding-left: 7%;\n}\n\n.project_name[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 3%;\n}\n\n.about_project[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  padding-right: 10%;\n}\n\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .project_name[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .about_project[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .slider_wrap[_ngcontent-%COMP%] {\n    padding: 3% 1% 8%;\n  }\n  .project_name[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n    margin-bottom: 2%;\n  }\n  .about_project[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n  .slider_img[_ngcontent-%COMP%] {\n    padding-left: 8%;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .project_name[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  .about_project[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .button_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 25px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .slider_wrap[_ngcontent-%COMP%] {\n    padding: 3% 1% 10%;\n  }\n  \n  .about_project[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .text_wrap[_ngcontent-%COMP%] {\n    padding-top: 6%;\n  }\n  .slider_img[_ngcontent-%COMP%] {\n    padding: 0 10%;\n  }\n  .button_group[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n}\n@media (max-width: 380px) {\n  .button_group[_ngcontent-%COMP%] {\n    padding-bottom: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2Uvc29sdXRpb25zL3NvbHV0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0FBSUY7O0FBQUE7RUFDQTtzQkFBQTtFQUVFLGlDQUFBO0FBR0Y7O0FBREE7RUFDQTtzQkFBQTtFQUVFLGFBQUE7RUFDQSxTQUFBO0FBSUY7O0FBRkE7RUFDQTtzQkFBQTtFQUVFLGVBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUhBO0VBQ0U7O3VCQUFBO0VBR0EsdUJBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7O0VBQUE7QUFLQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFRRjtBQUNGO0FBTkE7RUFDRTtJQUNFLGlCQUFBO0VBUUY7RUFOQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFRRjtFQU5BO0lBQ0UsZ0JBQUE7RUFRRjtBQUNGO0FBTkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBUUY7RUFOQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQVFGO0VBTkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBUUY7QUFDRjtBQU5BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQVFGO0VBTkE7SUFDRSxrQkFBQTtFQVFGO0VBTkY7OztNQUFBO0VBSUU7SUFDRSxnQkFBQTtFQVFGO0VBTkE7SUFDRSxlQUFBO0VBUUY7RUFOQTtJQUNFLGNBQUE7RUFRRjtFQU5BO0lBQ0Usa0JBQUE7RUFRRjtFQU5GOztNQUFBO0FBVUE7QUFOQTtFQUNFO0lBQ0Usa0JBQUE7RUFRRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29ue1xyXG4gIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29ue1xyXG4gIG1hcmdpbi1yaWdodDogNzAlO1xyXG59XHJcblxyXG4uYnV0dG9uX3RleHRfY29sb3J7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbn1cclxuLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpe1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMUI0QTtcclxufVxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxQjRBO1xyXG59XHJcblxyXG5cclxuLnByb2plY3Rze1xyXG4vKiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMzIwcHg7Ki9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI3LCA3NCwgMC4wOCk7XHJcbn1cclxuLnByb2plY3Rfd3JhcHtcclxuLyogIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDI5MHB4OyovXHJcbiAgcGFkZGluZzogMCA2JTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnByb2plY3RzX3RpdGxle1xyXG4vKiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7Ki9cclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbn1cclxuLnRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2xpZGVyX3dyYXB7XHJcbiAgLypkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWNvbHVtbi1nYXA6IDYlOyovXHJcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXHJcbiAgcGFkZGluZzogMyUgMCA0JTtcclxufVxyXG4uc2xpZGVyX2ltZ3tcclxuICBwYWRkaW5nLWxlZnQ6IDclO1xyXG59XHJcbi5wcm9qZWN0X25hbWV7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5hYm91dF9wcm9qZWN0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbn1cclxuLyouc2xpZGVyX2ltZ3tcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufSovXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxuICAucHJvamVjdF9uYW1le1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAuYWJvdXRfcHJvamVjdHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLnNsaWRlcl93cmFwe1xyXG4gICAgcGFkZGluZzogMyUgMSUgOCU7XHJcbiAgfVxyXG4gIC5wcm9qZWN0X25hbWV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbiAgLmFib3V0X3Byb2plY3R7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICAuc2xpZGVyX2ltZ3tcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAucHJvamVjdF9uYW1le1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5hYm91dF9wcm9qZWN0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5idXR0b25fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG4gIC5zbGlkZXJfd3JhcHtcclxuICAgIHBhZGRpbmc6IDMlIDElIDEwJTtcclxuICB9XHJcbi8qICAucHJvamVjdF9uYW1le1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfSovXHJcbiAgLmFib3V0X3Byb2plY3R7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAudGV4dF93cmFwe1xyXG4gICAgcGFkZGluZy10b3A6IDYlXHJcbiAgfVxyXG4gIC5zbGlkZXJfaW1ne1xyXG4gICAgcGFkZGluZzogMCAxMCU7XHJcbiAgfVxyXG4gIC5idXR0b25fZ3JvdXB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4vKiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH0qL1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gIC5idXR0b25fZ3JvdXB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6797:
/*!*************************************************!*\
  !*** ./src/app/homePage/solutions/solutions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "solutions": () => (/* binding */ solutions),
/* harmony export */   "specifications": () => (/* binding */ specifications)
/* harmony export */ });
const solutions = [{
  id: 1,
  name: 'Информационно-аналитическая платформа ProQ (ИАП ProQ)',
  description: 'Современная ETL – система, совместимая с медицинской информационной системой qMS,\n' + 'предназначена для консолидации, последующей обработки и\n' + 'визуализации данных из медицинских информационных систем, баз данных и других источников.' + ' Данное решение, способствует высоким темпам развития интеграционных, научных и аналитических задач. Интегрируем ИАП ProQ с МИС, учётными и складскими системами, c CRM, с системами документооборота, а также с комплексными ERP-системами.',
  demo: 'http://proq.software/demo/',
  video: '../../../assets/img/VideoKonsolidatia.mp4',
  videoStop: '../../../assets/img/VideoKonsolidatia_Moment.jpg',
  imgPage: '../../../assets/img/proqProekt.png',
  imgMain: '../../../assets/img/Konsolidatiya.png',
  commentsName2: 'АРХИТЕКТУРА',
  imgDetali: '../../../assets/img/arxitectyra.png',
  comments: [{
    id: 1,
    description: 'Консолидация данных из МИС qMS и других внешних источников;'
  },
  // {
  //     id: 2,
  //     description: 'Сокращение времени проведения научных и аналитических исследований;',
  // },
  {
    id: 2,
    description: 'Значительная экономия времени и ресурсов для проведения научных и аналитических' + 'исследований благодаря доступности данных;'
  }, {
    id: 3,
    description: 'Использование сторонних систем помощи принятия врачебных решений;'
  }, {
    id: 4,
    description: 'Мониторинг деятельности медицинской организации в режиме реального времени.'
  }],
  comments2: [{
    id: 1,
    description: 'Каждый модуль может существовать независимо друг от друга совместно c различными сторонними решениями'
  }, {
    id: 2,
    description: 'Централизованная панель управленияпрограммного комплекса, с возможностью уведомления системного администратора с использованием мессенджеров'
  }, {
    id: 3,
    description: 'Современная программная платформа на основе Docker Swarm'
  }, {
    id: 4,
    description: 'Продолжительность актуализации данных составляет 15 минут;'
  }
  // {
  //   id: 5,
  //   description: 'Высокий уровень автоматизации сложных технологических процессов;',
  // },
  // {
  //   id: 6,
  //   description: 'Минимальная нагрузка на штатных технических специалистов;',
  // },
  ],
  specifications: [{
    id: 1,
    name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
    description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций'
  }, {
    id: 2,
    name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
    description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' + 'Основная цель – формирование\n' + 'универсальных запросов к источникам\n' + 'информации, объединение и обработка\n' + 'результатов запросов'
  }, {
    id: 3,
    name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
    description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' + 'Широкие функциональные возможности.Современный дизайн.' + 'Высокая скорость изменений.'
  }, {
    id: 4,
    name: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
    description: 'роцессор от 3000 МГц, кэш от 2 МБ Оперативная память: для 32 битной системы 2Гб, 64 — 4Гб Жесткий диск: скоростью 7200 кэш от 32 гб, лучше ssd.'
  }],
  opportunities: [{
    id: 1,
    name: 'Консолидация данных из МИС qMS',
    description: 'Деятельность медицинской организации непрерывно связана с формированием ' + 'отчетной документации, ведением статистического и бухгалтерского учета. Выгрузка данных ' + 'из медицинской информационной системы – основа этих процессов.\n' + 'Наше программное обеспечение способно сократить временные издержки на формирование ' + 'выгрузок до 15 минут благодаря применению инновационных технологий в консолидации данных;\n'
  }, {
    id: 2,
    name: 'Конструктор запросов',
    description: 'Сведение таблиц и трансформация данных в них – одна из самых трудоемких ' + 'задач в подготовке данных, которая в особых случаях требует привлечения программистов.' + 'Конструктор запросов позволяет автоматизировать процессы формирования требуемых наборов' + ' без привлечения IT-специалистов.'
  }, {
    id: 3,
    name: 'Визуализация данных',
    description: 'Сводки информации по отделению позволяют отслеживать состояние пациентов,' + ' оперативно принимать решения о необходимости изменения методики лечения, оценивать' + ' эффективность деятельности медицинского персонала. Конструктор слайдов позволяет самостоятельно' + ' выбрать шаблоны отображения и заполнить их необходимой информацией.Для доступа к аналитике' + ' не требуется установка дополнительного ПО: веб-приложение доступно через браузер как на ' + 'компьютере, так и на мобильных устройствах (планшетах и телефонах).'
  }, {
    id: 4,
    name: 'Глубокая аналитика данных МИС',
    description: 'Доводилось ли Вам делать выборку пациентов, которые принимали указанные' + ' препараты на определенном этапе лечения конкретного заболевания? Формирование такой' + ' выборки вручную занимает недели в виду необходимости нажатий десятка кнопок графического' + ' интерфейса МИС и изучения медицинских записей. Алгоритмы полнотекстового поиска позволяют ' + 'решать такие задачи за считанные минуты.'
  }, {
    id: 5,
    name: 'Разработка и интеграция сторонних систем помощи принятия врачебных решений',
    description: 'Систематизация накопленных знаний и компетенций позволяет повысить' + ' качество оказываемой медицинской помощи, сократить издержки и повысить эффективность ' + 'работы медицинского учреждения. Комплексные СППВР достаточно сложно интегрировать в' + ' функциональные процессы МИС, однако алгоритмы консолидации данных могут обеспечить ' + 'алгоритмы машинного обучения  необходимыми данными, а пациентов – правильным и ' + 'своевременным врачебным решением. Наш совместный проект с ВЦЭРМ по ранней диагностике ' + 'сепсиса является наглядным подтверждением эффективности применяемого подхода.'
  }, {
    id: 6,
    name: 'Мониторинг программного комплекса',
    description: 'Сбои в работе программного и аппаратного обеспечения случаются в самый' + ' неподходящий момент. Используемые технологии и инструменты мониторинга позволяют' + ' не только своевременно отслеживать необходимые параметры, но и уведомлять системного' + ' администратора по почте и в мессенджерах;'
  }, {
    id: 7,
    name: 'Автоматизация тестирования, доставки и установки обновлений',
    description: 'Рутинные процессы тестирования, доставки и установки ' + 'обновлений тратят много сил и времени. Автоматизация этих процессов ' + 'позволила избежать многочисленных временных задержек и ошибок, а также ' + 'сократила время запуска новой версии ПО с нескольких часов до 5 минут;'
  }]
}, {
  id: 2,
  name: 'Мониторинг и планирование сервисного обслуживания медицинского оборудования',
  description: 'Позволяет выявить нецелевое использование, а так же фактически остаточный' + ' ресурс.Раняя диагностика способствует не прирывности бизнес-процессов учреждения.',
  demo: 'http://proq.software/demo/',
  video: '../../../assets/img/VideoKonsolidatia.mp4',
  videoStop: '../../../assets/img/VideoKonsolidatia_Moment.jpg',
  imgPage: '../../../assets/img/MonitoringObor.png',
  imgMain: '../../../assets/img/MonitoringObor.png',
  commentsName2: 'ПРЕИМУЩЕСТВА СИСТЕМЫ',
  imgDetali: '../../../assets/img/arxitectyra.png',
  comments: [{
    id: 1,
    description: 'Мониторинг работоспособности и интенсивности эксплуатации;'
  }, {
    id: 2,
    description: 'Контроль своевременного и качественного выполнения технического обслуживания;'
  }, {
    id: 3,
    description: 'Сокращение времени диагностики и простоя неисправного оборудования;'
  }, {
    id: 4,
    description: 'Консолидация информации о плановом сервисном обслуживании и ремонтных работах;'
  }
  // {
  //   id: 5,
  //   description: 'Возможность работы с привычными табличными интерфейсами',
  // },
  ],
  comments2: [{
    id: 1,
    description: 'Адаптивность: "Работает с оборудованием всех производителей" и "Возможна интеграция с существующими информационными системами;'
  }, {
    id: 2,
    description: 'Консолидация технической информации со всего парка тяжёлого медицинского оборудования и его оперативный контроль;'
  }, {
    id: 3,
    description: 'Сокращение времени диагностики и простоя неисправного оборудования;'
  }, {
    id: 4,
    description: 'Безопасность: "Российская разработка- не зависит от санкций и внешнеполитической ситуации" и " Используются существующие каналы связи (в т.ч. защищенные)";'
  }, {
    id: 5,
    description: 'Возможно детальное разграничение прав доступа к технической информации;'
  }],
  specifications: [{
    id: 1,
    name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
    description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций'
  }, {
    id: 2,
    name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
    description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' + 'Основная цель – формирование\n' + 'универсальных запросов к источникам\n' + 'информации, объединение и обработка\n' + 'результатов запросов'
  }, {
    id: 3,
    name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
    description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' + 'Широкие функциональные возможности.Современный дизайн.' + 'Высокая скорость изменений.'
  }, {
    id: 4,
    name: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
    description: 'роцессор от 3000 МГц, кэш от 2 МБ Оперативная память: для 32 битной системы 2Гб, 64 — 4Гб Жесткий диск: скоростью 7200 кэш от 32 гб, лучше ssd.'
  }],
  opportunities: [{
    id: 1,
    name: 'Оценка интенсивности использования оборудования',
    description: 'Можно выявить неиспользуемое/перегруженное оборудование. Эти данные можно использовать' + 'при планировании модернизации или расширении парка КТ/МРТ ЛПУ'
  }, {
    id: 2,
    name: 'Мониторинг нарушения работоспособности',
    description: 'Можно выявлять в собираемых логах критические ошибки. По факту их появления настроить' + 'оповещения ответственных лиц'
  }, {
    id: 3,
    name: ' Удаленная диагностика технического состояния',
    description: 'Собираемые системные журналы (логи) используются сервисными инженерами для диагностики' + 'технического состояния. Можно предоставлять удаленный доступ к этим данным' + 'квалифицированным специалистам для сокращения времени диагностики, снижения времени и' + 'затрат на сервисные операции, снижения простоя, оптимизацию выездов инженеров и тд.;'
  }, {
    id: 4,
    name: 'Контроль качества сервисных работ',
    description: 'Возможные сценарии:' + 'Защита от модификации журналов недобросовестными сервисными организациями' + '(злонамеренное сокрытие ошибок или иных аппаратных событий);' + 'Оценка качества проводимых сервисных работ (сервисные операции имеют отражения в виде' + 'определенной последовательности записей в логах, по их наличию или полноте можно построить' + 'модель оценки качества обслуживания или ремонта – работа очень объемная, но в «ручном» режиме' + 'она работает, так контролируются неопытные сервис-инженеры);'
  }, {
    id: 5,
    name: 'Оценка остаточного ресурса основных узлов',
    description: 'Для КТ ключевым показателем являются «скан-секунды излучателя». Пороговые значения могут ' + 'быть определены прямо или косвенно (просто срок службы) для каждого вендора. Достижение ' + 'пороговых значений не является показанием для замены излучателя, скорее используется как ' + 'ориентир при диагностике. По динамике сокращения остаточного ресурса можно построить' + 'прогнозную модель для подготовки к замене или диагностике.'
  }, {
    id: 6,
    name: 'Учёт проводимых сервисных работ',
    description: 'Информационная система для учета всех операций по обслуживанию (контроль технического \n' + 'состояния, профилактическое техническое обслуживание, ремонтные работы), в т.ч. с учетом \n' + 'сервисных контрактов и гарантийных обязательств на выполненные работы'
  }, {
    id: 7,
    name: 'Контроль исполнения регламента обслуживания',
    description: 'Рутинные процессы тестирования, доставки и установки обновлений ' + 'тратят много сил и времени. Автоматизация этих процессов позволила избежать' + ' многочисленных временных задержек и ошибок, а также сократила время запуска' + ' новой версии ПО с нескольких часов до 5 минут;'
  }]
}];
// {
//   id: 2,
//   name: 'ProQ: Аналитика',
//   description: 'Современный и удобный инструмент для аналитической работы. Подходит для оценки\n' +
//     '                состояния медицинского учреждения как в режиме реального времени, ' +
//     'так и в ретроспективе.',
//   demo: 'http://proq.software/demo-web/',
//   imgMain: '../../../assets/img/BlokVebInterfeisov.png',
//   imgPage: '../../../assets/img/BlokVebInterfeisovRisovka.png'
// },
const specifications = [{
  id: 1,
  name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
  demo: 'http://proq.software/demo/',
  img: '../../../assets/img/Konsolidatiya.png',
  imgDefault: '../../../assets/compressedImg/Konsolidatiya-min.png',
  description: 'Данный блок решает задачи миграции данных из различных источников и баз данных, в том числе из МИС qMS, их предварительной обработки и хранения.'
}, {
  id: 2,
  name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
  demo: '',
  img: '../../../assets/img/ObrabotkaDannix.png',
  imgDefault: '../../../assets/compressedImg/ObrabotkaDannix-min.png',
  description: 'Современный и простой ETL-инструмент для реализации бизнес-логики обработки данных с применением технологий LOW-CODE'
}, {
  id: 3,
  name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
  demo: 'http://proq.software/demo-web/',
  img: '../../../assets/img/BlokVebInterfeisov.png',
  imgDefault: '../../../assets/compressedImg/BlokVebInterfeisov-min.png',
  description: 'Извлекайте ценность из ваших данных быстрее с помощью аналитической платформы ProQ'
}];

/***/ }),

/***/ 1717:
/*!***************************************************!*\
  !*** ./src/app/homePage/title/title.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstTitleComponent": () => (/* binding */ FirstTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FirstTitleComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function FirstTitleComponent_Factory(t) {
      return new (t || FirstTitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstTitleComponent,
      selectors: [["app-first-title"]],
      decls: 16,
      vars: 0,
      consts: [[1, "first_title"], [1, "title_wrap"], [1, "container-fluid"], [1, "row", "justify-content-start"], [1, "col-12", "col-sm-3", "services"], [1, "text"], [1, "col-12", "col-sm-9", "textabout"], [1, "services_text"]],
      template: function FirstTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0423\u0441\u043B\u0443\u0433\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043B\u0430\u0436\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043C\u043E\u043B\u043E\u0434\u044B\u0445 \u0438 \u0443\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u0432\u043E\u0438\u043C \u0434\u0435\u043B\u043E\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 IT \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0438\u0434\u0435\u0442 \u0412\u0430\u043C \u043D\u0430 \u043F\u043E\u043C\u043E\u0449\u044C. \u0427\u0435\u043C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0441\u043B\u043E\u0436\u043D\u0435\u0435 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0437\u0430\u0434\u0430\u0447\u0430, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0442\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0435\u0435 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0435\u0451 \u0440\u0435\u0448\u0430\u0442\u044C. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
      },
      styles: [".first_title[_ngcontent-%COMP%] {\n  \n  background: #FFFFFF;\n}\n\n.title_wrap[_ngcontent-%COMP%] {\n  \n  padding-left: 6%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n}\n\n.row[_ngcontent-%COMP%] {\n  padding: 3% 0;\n}\n\n.services[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.textabout[_ngcontent-%COMP%] {\n  \n  padding: 2% 6% 2% 2%;\n  height: auto;\n  background: url('Rectangle 22.svg') center no-repeat;\n  background-size: cover;\n}\n\n.services_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .services_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 980px) {\n  .services_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .services_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  .textabout[_ngcontent-%COMP%] {\n    padding: 1% 3% 1% 1%;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n    margin-bottom: 3%;\n  }\n  .services_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZVBhZ2UvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQTtzQkFBQTtFQUVFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDQTtzQkFBQTtFQUVFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDQTtzQkFBQTtFQUVFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG9EQUFBO0VBQ0Esc0JBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBT0Y7O0FBTEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBUUY7RUFOQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQVFGO0FBQ0Y7QUFOQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFRRjtBQUNGO0FBTkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBUUY7RUFOQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQVFGO0VBTkE7SUFDRSxvQkFBQTtFQVFGO0FBQ0Y7QUFOQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQVFGO0VBTkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFRRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0X3RpdGxle1xyXG4vKiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjgwcHg7Ki9cclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcbi50aXRsZV93cmFwe1xyXG4vKiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjgwcHg7Ki9cclxuICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG59XHJcbi50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnJvd3tcclxuICBwYWRkaW5nOiAzJSAwO1xyXG59XHJcbi5zZXJ2aWNlc3tcclxuICBtYXJnaW46IGF1dG8gMDtcclxufVxyXG4udGV4dGFib3V0e1xyXG4vKiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMzIwcHg7Ki9cclxuICBwYWRkaW5nOiAyJSA2JSAyJSAyJTtcclxuICBoZWlnaHQ6YXV0bztcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL1JlY3RhbmdsZSAyMi5zdmdcIikgY2VudGVyIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5zZXJ2aWNlc190ZXh0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxuICAuc2VydmljZXNfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuc2VydmljZXNfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC5zZXJ2aWNlc190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC50ZXh0YWJvdXR7XHJcbiAgICBwYWRkaW5nOiAxJSAzJSAxJSAxJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlc190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ 3624);



class MenuComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 24,
      vars: 2,
      consts: [[1, "header_line"], [1, "header_top_wrap"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-white"], ["href", "", 1, "navbar-brand"], ["alt", "logo", 1, "logo_img", 3, "defaultImage", "lazyLoad"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportContent", "aria-controls", "navbarSupportContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "custom-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "justify-content-end", "w-100"], [1, "nav-item", "active"], ["routerLink", "", 1, "nav-link"], [1, "nav-item"], ["routerLink", "servicesPage", 1, "nav-link"], ["routerLink", "companyPage", 1, "nav-link"], ["routerLink", "projectsPage", 1, "nav-link"], ["routerLink", "footer", 1, "nav-link"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11)(13, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0423\u0441\u043B\u0443\u0433\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11)(16, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11)(19, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11)(22, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../assets/compressedImg/loading.png")("lazyLoad", "../../assets/img/logo.svg");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImageDirective],
      styles: [".header_line[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);\n}\n\n.header_top_wrap[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 280px;\n  padding: 0 6%;\n  margin: 0;\n}\n\n.custom-toggler.navbar-toggler[_ngcontent-%COMP%] {\n  color: #fff;\n  border: none;\n}\n\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 27, 74, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n\n.nav-item[_ngcontent-%COMP%] {\n  color: #001B4A !important;\n  font-weight: 400;\n  font-size: 20px;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #001B4A !important;\n  transition-property: all;\n  transition-duration: 80ms;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:active, .nav-link[_ngcontent-%COMP%]:focus {\n  color: #028ABE !important;\n  text-decoration: underline;\n}\n\n@media (max-width: 580px) {\n  .logo_img[_ngcontent-%COMP%] {\n    max-width: 170px;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBOztFQUFBO0FBR0E7RUFDRSwrUUFBQTtBQUlGOztBQUZBOzs7Ozs7RUFBQTtBQU9BO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBS0Y7O0FBSEE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBTUY7O0FBSEE7RUFDRTtJQUNFLGdCQUFBO0VBTUY7RUFKQTtJQUNFLGVBQUE7RUFNRjtBQUNGO0FBSEE7Ozs7OztFQUFBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfbGluZXtcclxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5oZWFkZXJfdG9wX3dyYXB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgcGFkZGluZzogMCA2JTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmN1c3RvbS10b2dnbGVyLm5hdmJhci10b2dnbGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLyoubmF2YmFyLWxpZ2h0Lm5hdmJhci10b2dnbGVyLWljb257XHJcbiAgY29sb3I6ICMwMDFCNEEgIWltcG9ydGFudDtcclxufSovXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCclM2UlM2NwYXRoIHN0cm9rZT0ncmdiYSgwLCAyNywgNzQsIDEpJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG4vKi5tZW51X2xpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDA7XHJcbn0qL1xyXG4ubmF2LWl0ZW17XHJcbiAgY29sb3I6ICMwMDFCNEEgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVye1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5uYXYtbGlua3tcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDFCNEEgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogODBtcztcclxufVxyXG4ubmF2LWxpbms6aG92ZXIsIC5uYXYtbGluazphY3RpdmUsIC5uYXYtbGluazpmb2N1c3tcclxuICBjb2xvcjogIzAyOEFCRSAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAubG9nb19pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xyXG4gIH1cclxuICAubmF2LWl0ZW17XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKi5tZW51X2xpc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogMDtcclxufSovXHJcbi8qLmhlYWRlcl9saW5le1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi5tZW51X2l0ZW17XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuLm1lbnVfaXRlbTpmaXJzdC1jaGlsZHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG4ubWVudV9saW5re1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogODBtcztcclxufVxyXG4ubWVudV9saW5rOmhvdmVyLCAubWVudV9saW5rOmFjdGl2ZSwgLm1lbnVfbGluazpmb2N1c3tcclxuICBjb2xvcjogIzAyOEFCRTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5tZW51X2l0ZW17XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLm1lbnVfaXRlbXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWVudV9pdGVte1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAhKiAubWVudV9saXN0e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfSohXHJcbi5tZW51X2xpc3R7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLm1lbnVfaXRlbXtcclxuICBmb250LXNpemU6IDZweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ubWVudV9pdGVtOmZpcnN0LWNoaWxke1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG59XHJcblxyXG4uaGVhZGVyX2xpbmV7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4uaGVhZGVyX3RvcF93cmFwe1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDI5MHB4O1xyXG4gIHBhZGRpbmc6IDAgNiU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5oZWFkZXJfdG9we1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAhKmdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQycHggMWZyOyohXHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyX3RpdGxle1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAuaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiA0M3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuaGVhZGVyX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyX3RvcF93cmFwe1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICEqIC5oZWFkZXJfdG9we1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIH0qIVxyXG4gIC5oZWFkZXJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG4gIC5oZWFkZXJfbG9nb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbiAgLmhlYWRlcl90b3Bfd3JhcHtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICB9XHJcbiAgISoud3JhcF9pbWcge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9KiFcclxufSovXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4037:
/*!******************************************************!*\
  !*** ./src/app/projectsPage/project-data.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDataService": () => (/* binding */ ProjectDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProjectDataService {
  constructor() {
    this.Projects = [{
      id: 1,
      name: 'API Создания и обновления пациентов в МИС qMS',
      description: 'Бесшовная интеграция Личного кабинета, при авторизации пациента с использованием ЕСИА',
      descriptionFull: 'Актуальные персональные данные пациента снижают риск отказа в выплате по тарифам ОМС и ' + 'позволяют вести документацию в соответствии с законодательством РФ. Ручной ввод данных пациента увеличивает время ' + 'работы регистратора, однако не всегда является качественным. Автоматизация процесса обновления данных позволила не только ' + 'увеличить эффективность работы регистраторов, но и дать возможность дистанционной записи первичных пациентов к специалистам.',
      img: '../../../assets/img/apiVygryzka.png',
      imgDefault: '../../../assets/compressedImg/apiVygryzka-min.png',
      comments: [{
        id: 1,
        name: 'Заказчик:',
        description: 'ФГБУ НМИЦ Эндокринологии МЗ РФ;'
      }, {
        id: 2,
        name: 'Решение:',
        description: 'Разработка программного интерфейса создания / обновления записей пациента в МИС qMS;'
      }, {
        id: 3,
        name: 'ЯП :',
        description: 'Cache Object Script;'
      }, {
        id: 4,
        name: 'Технологии:',
        description: 'NoSQL, JSON, REST.'
      }],
      partition1: {
        title: 'Преимущества',
        points: [{
          id: 1,
          name: 'Заголовок',
          mark: '01',
          description: 'Более 5300 пациентов были заведены в МИС qMS без' + ' участия регистраторов за 1 год.'
        }, {
          id: 2,
          name: 'Заголовок',
          mark: '02',
          description: 'Сократилась нагрузка на регистраторов. В случае ошибки ручного ввода, ' + 'данные исправляются автоматически.'
        }, {
          id: 3,
          name: 'Заголовок',
          mark: '03',
          description: 'Снизилось количество заявок в группу поддержки МИС ' + 'по задачам создания пациентов.'
        }, {
          id: 4,
          name: 'Заголовок',
          mark: '04',
          description: 'Бесшовная интеграция ЕСИА и Личного кабинета во время пандемии способствовала росту конверсий' + ' и увеличению числа оказываемых платных услуг, в том числе дистанционно.'
        }]
      },
      paragraph: {
        name: 'Результаты',
        text: 'Автоматизация рутинных кропотливых процессов ввода и проверки персональных данных пациентов позволила снизить ' + 'время ожидания в очереди в регистратуру, увеличить производительность регистраторов и удовлетворенность клиентов ЭНЦ.'
      }
    }, {
      id: 2,
      name: 'Интеграционный модуль МИС qMS',
      description: 'Аналитическая обработка данных вне МИС qMS',
      descriptionFull: 'Системная интеграция - сложный технологический процесс, требующий полноты, целостности и качества информации.' + 'Интеграции с внешними информационными системами, такими как ЕГИСЗ или ЕМИАС, требует также структурированности ' + 'информации и регулярного информационного обмена по заданным протоколам.' + '',
      img: '../../../assets/img/ArxitecteraIntegratii.png',
      imgDefault: '../../../assets/compressedImg/ArxitecteraIntegratii-min.png',
      comments: [{
        id: 1,
        name: 'Заказчик:',
        description: 'ФГБУ НМИЦ Эндокринологии МЗ РФ;'
      }, {
        id: 2,
        name: 'Решение:',
        description: 'Разработка архитектуры интеграционного модуля МИС qMS;'
      }, {
        id: 3,
        name: 'ЯП:',
        description: 'Cache Object Script, Go, Typescript;'
      }, {
        id: 4,
        name: 'Технологии:',
        description: 'Docker, Apache Kafka, Elasticsearch, Angular.'
      }],
      partition1: {
        title: 'Преимущества',
        points: [{
          id: 1,
          name: 'Заголовок',
          mark: '01',
          description: 'Современные технологии обработки информации позволили добиться ' + 'отказоустойчивой реализации блока консолидации данных.'
        }, {
          id: 2,
          name: 'Заголовок',
          mark: '02',
          description: 'Архитектура интеграционной шины позволяет выстраивать информационной обмен как с внутренними' + ', так и с внешними информационными системами.'
        }, {
          id: 3,
          name: 'Заголовок',
          mark: '03',
          description: 'Скорость информационного поиска в среднем составляет не более 10 мс.'
        }, {
          id: 4,
          name: 'Заголовок',
          mark: '04',
          description: 'Время, необходимое для консолидации данных из МИС qMS, составляет 4 часа.'
        }]
      },
      paragraph: {
        name: 'Результаты',
        text: 'Разработанная концепция развития информационных систем стала базой не только для интеграционных задач с ГИС, но ' + 'и для системы поддержки принятия врачебных решений EndoAI, а также ряда аналитических проектов, ' + 'осуществляющих бенчмаркинг деятельности ЭНЦ.'
      }
    }, {
      id: 3,
      name: 'Подсистема аналитических запросов',
      description: 'Алгоритмы информационного поиска для интеграции с подсистемами ЕГИСЗ',
      descriptionFull: 'ЕГИСЗ - государственная информационная система, целью которой является создание доступной среды ' + 'информационного обмена данными пациента по всей стране. Специфика медицинских учреждений, медицинских информационных систем,' + 'структур данных накладывают ограничения на передачу данных в ЕГИСЗ. В рамках проекта были разработаны алгоритмы ' + 'информационного поиска и группировки медицинских записей в соответствии с требованиями к' + ' структурам данных со стороны ЕГИСЗ и спецификой МИС qMS.',
      img: '../../../assets/img/AnalitikZapros.png',
      imgDefault: '../../../assets/compressedImg/AnalitikZapros-min.png',
      comments: [{
        id: 1,
        name: 'Заказчик:',
        description: 'ФГБУ НМИЦ Эндокринологии МЗ РФ;'
      }, {
        id: 2,
        name: 'Решение:',
        description: 'Разработка подсистемы аналитических запросов для интеграции МИС qMS с ЕГИСЗ;'
      }, {
        id: 3,
        name: 'ЯП:',
        description: 'Cache Object Script, Go;'
      }, {
        id: 4,
        name: 'Технологии:',
        description: 'Elasticsearch, Docker, REST.'
      }],
      partition1: {
        title: 'Преимущества',
        points: [{
          id: 1,
          name: 'Заголовок',
          mark: '01',
          description: 'Алгоритмы информационного поиска учитывают требования РЭМД, ФЭР, ИЭМК.'
        }, {
          id: 2,
          name: 'Заголовок',
          mark: '02',
          description: 'Время формирования результатов аналитических запросов ' + 'составляет не более 3 секунд.'
        }, {
          id: 3,
          name: 'Заголовок',
          mark: '03',
          description: 'Гибкая архитектура решения позволяет не только легко расширять набор запросов, ' + 'но и модифицировать условия фильтрации информации.'
        }, {
          id: 4,
          name: 'Заголовок',
          mark: '04',
          description: 'Результаты аналитических запросов формируются в формате JSON.'
        }]
      },
      paragraph: {
        name: 'Результаты',
        text: 'Разработанные алгоритмы информационного поиска позволили реализовать первый этап информационного обмена с ' + 'внешними информационными системами, стали фундаментом для других аналитических проектов, например, ' + 'автоматизированному отчету "Бюро пропусков".'
      }
    }, {
      id: 4,
      name: 'Структурирование медицинских записей',
      description: 'С 2021 года передача структурированных данных в ЕГИСЗ стала обязательной, однако проблема структурированности медицинских записей остается до сих пор ',
      descriptionFull: 'Рукописные шифры от руки врача уходят в прошлое, однако ' + 'многие лечебные учреждения до сих пор не ведут медицинские записи в ' + 'структурированном виде. Наш продукт позволяет структурировать медицинские' + ' записи и подготавливать их для машинного анализа.',
      img: '../../../assets/img/StroktyrirovanieProekt.png',
      imgDefault: '../../../assets/compressedImg/StroktyrirovanieProekt-min.png',
      comments: [{
        id: 1,
        name: 'ЯП:',
        description: 'SQL, Python, Go, Cache Object Script, M, JavaScript, Java;'
      }, {
        id: 2,
        name: 'Технологии:',
        description: 'SQL, NoSQL, Apache Kafka, Elasticsearch, REST, Параллельные вычисления, Docker, Angular.'
      }],
      partition1: {
        title: 'Наши преимущества',
        points: [{
          id: 1,
          name: 'Заголовок',
          mark: '01',
          description: 'Наличие сертифицированных специалистов по МИС qMS.'
        }, {
          id: 2,
          name: 'Заголовок',
          mark: '02',
          description: 'Сотрудничество с разработчиком МИС qMS - СП.АРМ.'
        }, {
          id: 3,
          name: 'Заголовок',
          mark: '03',
          description: 'Научно-исследовательское сотрудничество с МГТУ имени Н.Э. Баумана.'
        }, {
          id: 4,
          name: 'Заголовок',
          mark: '04',
          description: 'Использование современных технологий при разработке.'
        }]
      },
      paragraph: {
        name: 'Почему нас выбирают?',
        text: 'Серьезный опыт в решении нетиповых задач, компетенции в защите информации и глубокие знания МИС qMS ' + 'позволяют решать задачи широкого спектра: от создания аналитических отчетов до ' + 'разработки систем помощи принятия врачебных решений с использованием алгоритмов машинного обучения.'
      }
    }, {
      id: 5,
      name: 'Мониторинг и планирование сервисного обслуживания медицинского оборудования',
      description: 'Позволяет выявить нецелевое использование, а так же фактически остаточный ' + 'ресурс',
      descriptionFull: 'Раняя диагностика способствует неприрывности бизнес-процессов учреждения. Мониторинг работоспособности и интенсивности эксплуатации. Контроль своевременного и качественного выполнения технического обслуживания.' + ' Сокращение времени диагностики и простоя неисправного оборудования.\n' + 'Консолидация информации о плановом сервисном обслуживании и ремонтных работах.',
      img: '../../../assets/img/MonitoringOborProekt.png',
      imgDefault: '../../../assets/compressedImg/MonitoringOborProekt-min.png',
      comments: [{
        id: 1,
        name: 'Заказчик:',
        description: 'Частная клиника;'
      }, {
        id: 2,
        name: 'ЯП:',
        description: 'SQL, Python, Go, Cache Object Script, M, JavaScript, Java;'
      }, {
        id: 3,
        name: 'Технологии:',
        description: 'SQL, NoSQL, Apache Kafka, Elasticsearch, REST, Параллельные вычисления, ' + 'Docker, Angular.'
      }],
      partition1: {
        title: 'Наши преимущества',
        points: [{
          id: 1,
          name: 'Заголовок',
          mark: '01',
          description: 'Адаптивность: "Работает с оборудованием всех производителей" и ' + '"Возможна интеграция с существующими информационными системами".'
        }, {
          id: 2,
          name: 'Заголовок',
          mark: '02',
          description: 'Безопасность: "Российская разработка- не зависит от санкций и ' + 'внешнеполитической ситуации" и " Используются существующие каналы связи ' + '(в т.ч. защищенные)".'
        }, {
          id: 3,
          name: 'Заголовок',
          mark: '03',
          description: 'Консолидация технической информации со всего парка' + ' тяжёлого медицинского оборудования и его оперативный контроль.'
        }, {
          id: 4,
          name: 'Заголовок',
          mark: '04',
          description: 'Возможно детальное разграничение прав доступа к технической информации.'
        }]
      },
      paragraph: {
        name: 'Решаемые проблемы',
        text: 'Мониторинг работоспособности и интенсивности эксплуатации; Контроль ' + 'своевременного и качественного выполнения технического обслуживания; Сокращение' + ' времени диагностики и простоя неисправного оборудования; Консолидация' + ' информации о плановом сервисном обслуживании и ремонтных работах.'
      }
    }, {
      id: 6,
      name: 'Sepsis AI: Обнаружение сепсиса на ранней стадии',
      description: 'С использованием алгоритмов машинного обучения стала' + ' возможна ранняя диагностика сепсиса',
      descriptionFull: ' Сегодня мы имеем уникальную возможность извлекать новые знания' + ' из накопленного опыта и автоматизировать процессы анализа данных, спасая тем самым жизни' + ' сотен людей. Диагностика сепсиса на ранних стадиях - сложная задача даже для ' + 'алгоритмов машинного обучения. ' + 'На основе результатов лабораторных исследований мы разработали двухуровневую диагностическую модель,' + ' способную с высокой точностью определять ранние стадии сепсиса.',
      img: '../../../assets/img/IiSepsis.png',
      imgDefault: '../../../assets/compressedImg/IiSepsis-min.png',
      comments: [{
        id: 1,
        name: 'ЯП:',
        description: 'Python, Cache Object Script;'
      }, {
        id: 2,
        name: 'Технологии:',
        description: 'Нейронные сети, Data Mining, Apache Airflow.'
      }, {
        id: 3,
        name: 'Интеграции:',
        description: 'InterSystems Cache, M. Base, мессенджер МИС qMS, Telegram'
      }],
      partition1: {
        title: 'Преимущества',
        points: [{
          id: 1,
          name: 'Заголовок',
          mark: '01',
          description: 'Отсутствие лишней информационной нагрузки на медицинский персонал.'
        }, {
          id: 2,
          name: 'Заголовок',
          mark: '02',
          description: 'Сокращение нагрузки на коечный фонд.'
        }, {
          id: 3,
          name: 'Заголовок',
          mark: '03',
          description: 'Экономия на лекарственном обеспечении.'
        }, {
          id: 4,
          name: 'Заголовок',
          mark: '04',
          description: 'Низкие требования к аппаратному обеспечению.'
        }]
      },
      paragraph: {
        name: 'Почему нас выбирают?',
        text: 'Используемые нами алгоритмы позволяют выгружать полный объем ' + 'данных МИС за очень короткий промежуток времени (до 15 минут).' + ' Отличительная особенность наших выгрузок - JSON, который может быть ' + 'не только конвертирован в привычный табличный вид, но и полезен программистам и аналитикам.'
      }
    }, {
      id: 8,
      name: 'BotFarm: Цифровые помощники для предпринимателей',
      description: '...',
      descriptionFull: '...',
      img: '../../../assets/compressedImg/botFarm-logo.png',
      link: 'https://botfarm.online/',
      imgDefault: '...',
      comments: [{
        id: 1,
        name: '...',
        description: '...'
      }],
      partition1: {
        title: '..',
        points: [{
          id: 1,
          name: '...',
          mark: '...',
          description: '...'
        }]
      },
      paragraph: {
        name: '...',
        text: '...'
      }
    }, {
      id: 7,
      name: 'Тут может быть Ваш проект',
      description: 'Мы готовы помочь в реализации нетиповых проектов',
      descriptionFull: 'Наш коллектив – это сплав молодости и опыта, более 10 сотрудников, среди которых опытные профессионалы, ученые,' + 'молодые аспиранты и студенты. Мы активно привлекаем к реализации научных исследований ведущих российских специалистов. ' + 'Наша специализация - анализ данных, однако мы имеем компетенции в реверс-инжиниринге ПО, ' + 'системном администрировании, администрировании СУБД и разработке веб-приложений.',
      img: '../../../assets/img/VashProekt.png',
      imgDefault: '../../../assets/compressedImg/VashProekt-min.png',
      comments: [{
        id: 1,
        name: 'ЯП:',
        description: 'SQL, Python, Go, Cache Object Script, M, JavaScript, Java;'
      }, {
        id: 2,
        name: 'Технологии:',
        description: 'SQL, NoSQL, Apache Kafka, Elasticsearch, REST, ' + 'Параллельные вычисления, Docker, Angular.'
      }],
      partition1: {
        title: 'Наши преимущества',
        points: [{
          id: 1,
          name: 'Заголовок',
          mark: '01',
          description: 'Наличие сертифицированных специалистов по МИС qMS.'
        }, {
          id: 2,
          name: 'Заголовок',
          mark: '02',
          description: 'Сотрудничество с разработчиком МИС qMS - СП.АРМ.'
        }, {
          id: 3,
          name: 'Заголовок',
          mark: '03',
          description: 'Научно-исследовательское сотрудничество с МГТУ имени Н.Э. Баумана.'
        }, {
          id: 4,
          name: 'Заголовок',
          mark: '04',
          description: 'Использование современных технологий при разработке.'
        }]
      },
      paragraph: {
        name: 'Почему нас выбирают?',
        text: 'Серьезный опыт в решении нетиповых задач, компетенции в защите информации и глубокие знания МИС qMS ' + 'позволяют решать задачи широкого спектра: от создания аналитических отчетов до ' + 'разработки систем помощи принятия врачебных решений с использованием алгоритмов' + ' машинного обучения.'
      }
    }];
  }
  static {
    this.ɵfac = function ProjectDataService_Factory(t) {
      return new (t || ProjectDataService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectDataService,
      factory: ProjectDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2902:
/*!*****************************************************************************************************!*\
  !*** ./src/app/projectsPage/project-details/project-details-list/project-details-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsListComponent": () => (/* binding */ ProjectDetailsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ProjectDetailsListComponent_div_7_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", point_r1 == null ? null : point_r1.mark, " ");
  }
}
function ProjectDetailsListComponent_div_7_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r1 == null ? null : point_r1.description);
  }
}
function ProjectDetailsListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailsListComponent_div_7_h2_4_Template, 2, 1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailsListComponent_div_7_h3_6_Template, 2, 1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const point_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", point_r1 == null ? null : point_r1.mark);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", point_r1 == null ? null : point_r1.description);
  }
}
class ProjectDetailsListComponent {
  constructor() {
    this.data = {
      title: '',
      points: [{
        id: 1,
        name: 'Заголовок',
        mark: '01',
        description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
      }]
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ProjectDetailsListComponent_Factory(t) {
      return new (t || ProjectDetailsListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectDetailsListComponent,
      selectors: [["app-project-details-list"]],
      inputs: {
        data: "data"
      },
      decls: 8,
      vars: 2,
      consts: [[1, "project_title"], [1, "project_wrap"], [1, "text_wrap"], [1, "text"], [1, "container-fluid"], [1, "row"], ["class", "col-12 col-sm-6 gx-sm-5 gx-4 solutions_text_wrap", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "gx-sm-5", "gx-4", "solutions_text_wrap"], [1, "list_wrap"], [1, "row", "list_item"], [1, "col-1", "col-sm-2", "number"], ["class", "bold_text", 4, "ngIf"], [1, "col-11", "col-sm-10"], ["class", "project_text", 4, "ngIf"], [1, "bold_text"], [1, "project_text"]],
      template: function ProjectDetailsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDetailsListComponent_div_7_Template, 7, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.points);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".project_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.bold_text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.list_wrap[_ngcontent-%COMP%] {\n  padding: 5% 0 0;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  padding-bottom: 10%;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.project_text_wrap[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.project_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n  .bold_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 768px) {\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .bold_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .number[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMtbGlzdC9wcm9qZWN0LWRldGFpbHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVFGOztBQUxBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVFGO0VBTkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVFGO0FBQ0Y7QUFOQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBUUY7QUFDRjtBQU5BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFRRjtBQUNGO0FBTkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQVFGO0VBTkE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQVFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdF93cmFwe1xyXG4gIHBhZGRpbmc6IDMlIDYlO1xyXG59XHJcbi50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJvbGRfdGV4dHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5saXN0X3dyYXB7XHJcbiAgcGFkZGluZzogNSUgMCAwO1xyXG59XHJcbi5saXN0X2l0ZW17XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufVxyXG4ubGlzdF9pdGVtOmxhc3QtY2hpbGR7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLnByb2plY3RfdGV4dF93cmFwe1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG59XHJcbi5wcm9qZWN0X3RleHR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC5wcm9qZWN0X3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAucHJvamVjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbiAgLmJvbGRfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJvamVjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5ib2xkX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5udW1iZXJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 572:
/*!*****************************************************************************************************!*\
  !*** ./src/app/projectsPage/project-details/project-details-note/project-details-note.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsNoteComponent": () => (/* binding */ ProjectDetailsNoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ProjectDetailsNoteComponent_div_3_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 10)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.name);
  }
}
function ProjectDetailsNoteComponent_div_3_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.description);
  }
}
function ProjectDetailsNoteComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailsNoteComponent_div_3_h2_3_Template, 3, 1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8)(5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailsNoteComponent_div_3_h3_6_Template, 2, 1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r1.description);
  }
}
class ProjectDetailsNoteComponent {
  constructor() {
    this.comments = [{
      id: 1,
      name: 'Заказчик:',
      description: 'Текст'
    }];
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ProjectDetailsNoteComponent_Factory(t) {
      return new (t || ProjectDetailsNoteComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectDetailsNoteComponent,
      selectors: [["app-project-details-note"]],
      inputs: {
        comments: "comments"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "project_title"], [1, "project_wrap"], [1, "container-fluid"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-4", "col-sm-2", "col_wrap"], [1, "text_wrap"], ["class", "text_about", 4, "ngIf"], [1, "col-8", "col_wrap"], [1, "text_about_wrap"], [1, "text_about"]],
      template: function ProjectDetailsNoteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailsNoteComponent_div_3_Template, 7, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".project_wrap[_ngcontent-%COMP%] {\n  padding: 2% 6% 0;\n}\n\n.text_about[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 2%;\n}\n\n.col_wrap[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n@media (max-width: 1280px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .project_wrap[_ngcontent-%COMP%] {\n    padding: 3% 6%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMtbm90ZS9wcm9qZWN0LWRldGFpbHMtbm90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7QUFHRjs7QUFEQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFJRjtBQUNGO0FBRkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBSUY7QUFDRjtBQUZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFJRjtBQUNGO0FBREE7RUFDRTtJQUNFLGNBQUE7RUFHRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Rfd3JhcHtcclxuICBwYWRkaW5nOiAyJSA2JSAwO1xyXG59XHJcbi50ZXh0X2Fib3V0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uY29sX3dyYXB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0X2Fib3V0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5wcm9qZWN0X3dyYXB7XHJcbiAgICBwYWRkaW5nOiAzJSA2JTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3091:
/*!***************************************************************************************************************!*\
  !*** ./src/app/projectsPage/project-details/project-details-paragraph/project-details-paragraph.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsParagraphComponent": () => (/* binding */ ProjectDetailsParagraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProjectDetailsParagraphComponent {
  constructor() {
    this.paragraph = {
      name: '',
      text: ''
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ProjectDetailsParagraphComponent_Factory(t) {
      return new (t || ProjectDetailsParagraphComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectDetailsParagraphComponent,
      selectors: [["app-project-details-paragraph"]],
      inputs: {
        paragraph: "paragraph"
      },
      decls: 9,
      vars: 2,
      consts: [[1, "project_title"], [1, "project_wrap"], [1, "part"], [1, "project"], [1, "text"], [1, "textabout"], [1, "project_text"]],
      template: function ProjectDetailsParagraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.paragraph.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.paragraph.text);
        }
      },
      styles: [".project_title[_ngcontent-%COMP%] {\n  background-color: rgba(0, 27, 74, 0.08);\n}\n\n.project_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.project_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n    margin-bottom: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMtcGFyYWdyYXBoL3Byb2plY3QtZGV0YWlscy1wYXJhZ3JhcGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBS0Y7RUFIQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQUtGO0VBSEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUtGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdF90aXRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI3LCA3NCwgMC4wOCk7XHJcbn1cclxuLnByb2plY3Rfd3JhcHtcclxuICBwYWRkaW5nOiAzJSA2JTtcclxufVxyXG4udGV4dHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9qZWN0X3RleHR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAucHJvamVjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbiAgLnByb2plY3RfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9qZWN0X3RleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8715:
/*!*******************************************************************************************************!*\
  !*** ./src/app/projectsPage/project-details/project-details-title/project-details-title.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsTitleComponent": () => (/* binding */ ProjectDetailsTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProjectDetailsTitleComponent {
  constructor() {
    this.data = {
      name: '',
      descriptionFull: '',
      description: ''
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ProjectDetailsTitleComponent_Factory(t) {
      return new (t || ProjectDetailsTitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectDetailsTitleComponent,
      selectors: [["app-project-details-title"]],
      inputs: {
        data: "data"
      },
      decls: 13,
      vars: 3,
      consts: [[1, "project_title"], [1, "project_wrap"], [1, "part"], [1, "project"], [1, "text"], [1, "col-8", "col_wrap"], [1, "text_about_wrap"], [1, "text_about"], [1, "textabout"], [1, "project_text"]],
      template: function ProjectDetailsTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "h3", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.description, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.descriptionFull);
        }
      },
      styles: [".project_wrap[_ngcontent-%COMP%] {\n  padding: 0 6%;\n  margin-bottom: 3%;\n}\n\n.project[_ngcontent-%COMP%] {\n  padding: 3% 0 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.textabout[_ngcontent-%COMP%] {\n  padding: 2% 0 0;\n}\n\n.project_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 980px) {\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMtdGl0bGUvcHJvamVjdC1kZXRhaWxzLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFLRjs7QUFIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFNRjtFQUpBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU1GO0FBQ0Y7QUFKQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFNRjtFQUpBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQU1GO0VBSkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFNRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Rfd3JhcHtcclxuICBwYWRkaW5nOiAwIDYlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5wcm9qZWN0e1xyXG4gIHBhZGRpbmc6IDMlIDAgMDtcclxufVxyXG4udGV4dHtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnRleHRhYm91dHtcclxuICBwYWRkaW5nOiAyJSAwIDA7XHJcbn1cclxuLnByb2plY3RfdGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICB9XHJcbiAgLnByb2plY3RfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAucHJvamVjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB9XHJcbiAgLnByb2plY3RfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG4gIC5wcm9qZWN0X3RleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6097:
/*!***************************************************************************!*\
  !*** ./src/app/projectsPage/project-details/project-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsComponent": () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _project_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-data.service */ 4037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../homePage/footer/footer.component */ 5675);
/* harmony import */ var _project_details_title_project_details_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-details-title/project-details-title.component */ 8715);
/* harmony import */ var _project_details_list_project_details_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-details-list/project-details-list.component */ 2902);
/* harmony import */ var _project_details_note_project_details_note_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-details-note/project-details-note.component */ 572);
/* harmony import */ var _project_details_paragraph_project_details_paragraph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-details-paragraph/project-details-paragraph.component */ 3091);









class ProjectDetailsComponent {
  constructor(ps, route, titleService) {
    this.ps = ps;
    this.route = route;
    this.titleService = titleService;
    this.row = {
      id: 1,
      name: 'Ошибка 404',
      description: 'Повседневная практика показывает, что выбранный нами инновационный путь...',
      descriptionFull: 'Похоже, что Вы не туда попали....',
      img: '../../../assets/img/image%2015.svg',
      comments: [{
        id: 1,
        name: '',
        description: 'Попробуйте вернуться на страницу проектов и выбрать проект из списка'
      }],
      partition1: {
        title: 'Почему так случилось?',
        points: [{
          id: 1,
          name: 'Заголовок',
          mark: '01',
          description: 'Ваша ссылка устарела или не работает'
        }, {
          id: 2,
          name: 'Заголовок',
          mark: '02',
          description: 'Опечатка при вводе ссылке в адресную строку'
        }, {
          id: 3,
          name: 'Заголовок',
          mark: '03',
          description: 'Ошибка на сайте'
        }, {
          id: 4,
          name: 'Заголовок',
          mark: '04',
          description: 'Неудачная хакерская атака'
        }]
      },
      paragraph: {
        name: 'Нашли ошибку на сайте?',
        text: 'Напишите нам на почту или в форму обратной связи! Мы будем рады Вашей помощи!'
      }
    };
  }
  ngOnInit() {
    let tmp = this.route.snapshot.paramMap.get('name');
    var rowArray = this.ps.Projects.filter(proj => proj.name === tmp);
    if (rowArray.length > 0) {
      this.row = rowArray[0];
    }
    this.titleService.setTitle(this.row.name);
  }
  static {
    this.ɵfac = function ProjectDetailsComponent_Factory(t) {
      return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_project_data_service__WEBPACK_IMPORTED_MODULE_0__.ProjectDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ProjectDetailsComponent,
      selectors: [["app-project-details"]],
      decls: 6,
      vars: 4,
      consts: [[3, "data"], [3, "comments"], [3, "paragraph"]],
      template: function ProjectDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-project-details-title", 0)(2, "app-project-details-note", 1)(3, "app-project-details-list", 0)(4, "app-project-details-paragraph", 2)(5, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.row);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("comments", ctx.row.comments);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.row.partition1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("paragraph", ctx.row.paragraph);
        }
      },
      dependencies: [_homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _project_details_title_project_details_title_component__WEBPACK_IMPORTED_MODULE_2__.ProjectDetailsTitleComponent, _project_details_list_project_details_list_component__WEBPACK_IMPORTED_MODULE_3__.ProjectDetailsListComponent, _project_details_note_project_details_note_component__WEBPACK_IMPORTED_MODULE_4__.ProjectDetailsNoteComponent, _project_details_paragraph_project_details_paragraph_component__WEBPACK_IMPORTED_MODULE_5__.ProjectDetailsParagraphComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7571:
/*!***************************************************************!*\
  !*** ./src/app/projectsPage/project1/project1-list/points.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "points": () => (/* binding */ points)
/* harmony export */ });
const points = [{
  id: 1,
  name: 'Заголовок',
  mark: '01',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 2,
  name: 'Заголовок',
  mark: '02',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 3,
  name: 'Заголовок',
  mark: '03',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 4,
  name: 'Заголовок',
  mark: '04',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}];

/***/ }),

/***/ 1803:
/*!********************************************************************************!*\
  !*** ./src/app/projectsPage/project1/project1-list/project1-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project1ListComponent": () => (/* binding */ Project1ListComponent)
/* harmony export */ });
/* harmony import */ var _points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points */ 7571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function Project1ListComponent_div_7_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](point_r1.mark);
  }
}
function Project1ListComponent_div_7_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](point_r1.description);
  }
}
function Project1ListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Project1ListComponent_div_7_h2_4_Template, 2, 1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Project1ListComponent_div_7_h3_6_Template, 2, 1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const point_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", point_r1.mark);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", point_r1.description);
  }
}
class Project1ListComponent {
  constructor() {
    this.points = _points__WEBPACK_IMPORTED_MODULE_0__.points;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function Project1ListComponent_Factory(t) {
      return new (t || Project1ListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Project1ListComponent,
      selectors: [["app-project1-list"]],
      decls: 8,
      vars: 1,
      consts: [[1, "project_title"], [1, "project_wrap"], [1, "text_wrap"], [1, "text"], [1, "container-fluid"], [1, "row"], ["class", "col-12 col-sm-6 gx-sm-5 gx-4 solutions_text_wrap", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "gx-sm-5", "gx-4", "solutions_text_wrap"], [1, "list_wrap"], [1, "row", "list_item"], [1, "col-1", "col-sm-2", "number"], ["class", "bold_text", 4, "ngIf"], [1, "col-11", "col-sm-10"], ["class", "project_text", 4, "ngIf"], [1, "bold_text"], [1, "project_text"]],
      template: function Project1ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Project1ListComponent_div_7_Template, 7, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.points);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".project_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.bold_text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.list_wrap[_ngcontent-%COMP%] {\n  padding: 5% 0 0;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  padding-bottom: 10%;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.project_text_wrap[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.project_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n  .bold_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 768px) {\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .bold_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .number[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3QxL3Byb2plY3QxLWxpc3QvcHJvamVjdDEtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVFGOztBQUxBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVFGO0VBTkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVFGO0FBQ0Y7QUFOQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBUUY7QUFDRjtBQU5BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFRRjtFQU5BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFRRjtBQUNGO0FBTkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQVFGO0VBTkE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQVFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdF93cmFwe1xyXG4gIHBhZGRpbmc6IDMlIDYlO1xyXG59XHJcbi50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJvbGRfdGV4dHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5saXN0X3dyYXB7XHJcbiAgcGFkZGluZzogNSUgMCAwO1xyXG59XHJcbi5saXN0X2l0ZW17XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufVxyXG4ubGlzdF9pdGVtOmxhc3QtY2hpbGR7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLnByb2plY3RfdGV4dF93cmFwe1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG59XHJcbi5wcm9qZWN0X3RleHR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC5wcm9qZWN0X3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAucHJvamVjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbiAgLmJvbGRfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJvamVjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5ib2xkX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5udW1iZXJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6974:
/*!*****************************************************************!*\
  !*** ./src/app/projectsPage/project1/project1-note/comments.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comments": () => (/* binding */ comments)
/* harmony export */ });
const comments = [{
  id: 1,
  name: 'Заказчик:',
  description: 'Текст'
}, {
  id: 2,
  name: 'Решение:',
  description: 'Текст'
}, {
  id: 3,
  name: 'Заголовок:',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 4,
  name: 'Технологии:',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}];

/***/ }),

/***/ 3471:
/*!********************************************************************************!*\
  !*** ./src/app/projectsPage/project1/project1-note/project1-note.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project1NoteComponent": () => (/* binding */ Project1NoteComponent)
/* harmony export */ });
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments */ 6974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function Project1NoteComponent_div_3_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 10)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r1.name);
  }
}
function Project1NoteComponent_div_3_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r1.description);
  }
}
function Project1NoteComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Project1NoteComponent_div_3_h2_3_Template, 3, 1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8)(5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Project1NoteComponent_div_3_h3_6_Template, 2, 1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r1.description);
  }
}
class Project1NoteComponent {
  constructor() {
    this.comments = _comments__WEBPACK_IMPORTED_MODULE_0__.comments;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function Project1NoteComponent_Factory(t) {
      return new (t || Project1NoteComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Project1NoteComponent,
      selectors: [["app-project1-note"]],
      decls: 4,
      vars: 1,
      consts: [[1, "project_title"], [1, "project_wrap"], [1, "container-fluid"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-4", "col-sm-2", "col_wrap"], [1, "text_wrap"], ["class", "text_about", 4, "ngIf"], [1, "col-8", "col_wrap"], [1, "text_about_wrap"], [1, "text_about"]],
      template: function Project1NoteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Project1NoteComponent_div_3_Template, 7, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".project_wrap[_ngcontent-%COMP%] {\n  padding: 2% 6% 0;\n}\n\n.text_about[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 2%;\n}\n\n.col_wrap[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n@media (max-width: 1280px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .project_wrap[_ngcontent-%COMP%] {\n    padding: 3% 6%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3QxL3Byb2plY3QxLW5vdGUvcHJvamVjdDEtbm90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7QUFHRjs7QUFEQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFJRjtBQUNGO0FBRkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBSUY7QUFDRjtBQUZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFJRjtBQUNGO0FBREE7RUFDRTtJQUNFLGNBQUE7RUFHRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Rfd3JhcHtcclxuICBwYWRkaW5nOiAyJSA2JSAwO1xyXG59XHJcbi50ZXh0X2Fib3V0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uY29sX3dyYXB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0X2Fib3V0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5wcm9qZWN0X3dyYXB7XHJcbiAgICBwYWRkaW5nOiAzJSA2JTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4385:
/*!******************************************************************************************!*\
  !*** ./src/app/projectsPage/project1/project1-paragraph/project1-paragraph.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project1ParagraphComponent": () => (/* binding */ Project1ParagraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Project1ParagraphComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function Project1ParagraphComponent_Factory(t) {
      return new (t || Project1ParagraphComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Project1ParagraphComponent,
      selectors: [["app-project1-paragraph"]],
      decls: 9,
      vars: 0,
      consts: [[1, "project_title"], [1, "project_wrap"], [1, "part"], [1, "project"], [1, "text"], [1, "textabout"], [1, "project_text"]],
      template: function Project1ParagraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u043C\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. \u042F\u0432\u043D\u044B\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u043F\u043E\u0431\u0435\u0434\u044B \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0432 \u043F\u043E\u0441\u043C\u0435\u0448\u0438\u0449\u0435, \u0445\u043E\u0442\u044F \u0441\u0430\u043C\u043E \u0438\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043D\u0435\u0441\u043E\u043C\u043D\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u043B\u044C\u0437\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: [".project_title[_ngcontent-%COMP%] {\n  background-color: rgba(0, 27, 74, 0.08);\n}\n\n.project_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.project_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n    margin-bottom: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3QxL3Byb2plY3QxLXBhcmFncmFwaC9wcm9qZWN0MS1wYXJhZ3JhcGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBS0Y7RUFIQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQUtGO0VBSEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUtGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdF90aXRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI3LCA3NCwgMC4wOCk7XHJcbn1cclxuLnByb2plY3Rfd3JhcHtcclxuICBwYWRkaW5nOiAzJSA2JTtcclxufVxyXG4udGV4dHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wcm9qZWN0X3RleHR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAucHJvamVjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbiAgLnByb2plY3RfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9qZWN0X3RleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2913:
/*!**********************************************************************************!*\
  !*** ./src/app/projectsPage/project1/project1-title/project1-title.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project1TitleComponent": () => (/* binding */ Project1TitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Project1TitleComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function Project1TitleComponent_Factory(t) {
      return new (t || Project1TitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Project1TitleComponent,
      selectors: [["app-project1-title"]],
      decls: 9,
      vars: 0,
      consts: [[1, "project_title"], [1, "project_wrap"], [1, "part"], [1, "project"], [1, "text"], [1, "textabout"], [1, "project_text"]],
      template: function Project1TitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0422\u0435\u043A\u0441\u0442");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043D\u0430\u043C\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. \u042F\u0432\u043D\u044B\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u043F\u043E\u0431\u0435\u0434\u044B \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0432 \u043F\u043E\u0441\u043C\u0435\u0448\u0438\u0449\u0435, \u0445\u043E\u0442\u044F \u0441\u0430\u043C\u043E \u0438\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043D\u0435\u0441\u043E\u043C\u043D\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u043B\u044C\u0437\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: [".project_wrap[_ngcontent-%COMP%] {\n  padding: 0 6%;\n  margin-bottom: 3%;\n}\n\n.project[_ngcontent-%COMP%] {\n  padding: 3% 0 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.textabout[_ngcontent-%COMP%] {\n  padding: 2% 0 0;\n}\n\n.project_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 980px) {\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .project_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3QxL3Byb2plY3QxLXRpdGxlL3Byb2plY3QxLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFLRjs7QUFIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFNRjtFQUpBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU1GO0FBQ0Y7QUFKQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFNRjtFQUpBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQU1GO0VBSkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFNRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Rfd3JhcHtcclxuICBwYWRkaW5nOiAwIDYlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5wcm9qZWN0e1xyXG4gIHBhZGRpbmc6IDMlIDAgMDtcclxufVxyXG4udGV4dHtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnRleHRhYm91dHtcclxuICBwYWRkaW5nOiAyJSAwIDA7XHJcbn1cclxuLnByb2plY3RfdGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICB9XHJcbiAgLnByb2plY3RfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAucHJvamVjdF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB9XHJcbiAgLnByb2plY3RfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG4gIC5wcm9qZWN0X3RleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6117:
/*!*************************************************************!*\
  !*** ./src/app/projectsPage/project1/project1.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project1Component": () => (/* binding */ Project1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../homePage/footer/footer.component */ 5675);
/* harmony import */ var _project1_title_project1_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project1-title/project1-title.component */ 2913);
/* harmony import */ var _project1_note_project1_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project1-note/project1-note.component */ 3471);
/* harmony import */ var _project1_list_project1_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project1-list/project1-list.component */ 1803);
/* harmony import */ var _project1_paragraph_project1_paragraph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project1-paragraph/project1-paragraph.component */ 4385);






class Project1Component {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function Project1Component_Factory(t) {
      return new (t || Project1Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: Project1Component,
      selectors: [["app-project1"]],
      decls: 6,
      vars: 0,
      template: function Project1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-project1-title")(2, "app-project1-note")(3, "app-project1-list")(4, "app-project1-paragraph")(5, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _project1_title_project1_title_component__WEBPACK_IMPORTED_MODULE_1__.Project1TitleComponent, _project1_note_project1_note_component__WEBPACK_IMPORTED_MODULE_2__.Project1NoteComponent, _project1_list_project1_list_component__WEBPACK_IMPORTED_MODULE_3__.Project1ListComponent, _project1_paragraph_project1_paragraph_component__WEBPACK_IMPORTED_MODULE_4__.Project1ParagraphComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8456:
/*!***********************************************************************!*\
  !*** ./src/app/projectsPage/projects-list/projects-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsListComponent": () => (/* binding */ ProjectsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _project_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-data.service */ 4037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function ProjectsListComponent_div_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
  }
  if (rf & 2) {
    const card_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", card_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsListComponent_div_6_h5_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r1.name);
  }
}
function ProjectsListComponent_div_6_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r1.description);
  }
}
function ProjectsListComponent_div_6_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const card_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", card_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a0) {
  return {
    name: a0
  };
};
const _c1 = function (a1) {
  return ["projects", a1];
};
function ProjectsListComponent_div_6_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const card_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, card_r1.name)));
  }
}
function ProjectsListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProjectsListComponent_div_6_img_2_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsListComponent_div_6_h5_4_Template, 2, 1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectsListComponent_div_6_p_5_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsListComponent_div_6_a_7_Template, 5, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProjectsListComponent_div_6_a_8_Template, 5, 5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", card_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", card_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", card_r1.id !== 8 && card_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", card_r1.id === 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", card_r1.id !== 8);
  }
}
class ProjectsListComponent {
  constructor(ps) {
    this.ps = ps;
    this.selected = 'option2';
    this.cards = this.ps.Projects;
  }
  static {
    this.ɵfac = function ProjectsListComponent_Factory(t) {
      return new (t || ProjectsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_project_data_service__WEBPACK_IMPORTED_MODULE_0__.ProjectDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectsListComponent,
      selectors: [["app-projects-list"]],
      decls: 7,
      vars: 1,
      consts: [[1, "projects_list"], [1, "projects_wrap"], [1, "container-fluid"], [1, "row"], [1, "col-12"], ["class", "col-12 col-sm-6 card_wrap", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "card_wrap"], [1, "card"], ["class", "card-img-top", "alt", "...", 3, "src", 4, "ngIf"], [1, "card-body"], ["class", "card-title", 4, "ngIf"], ["class", "card-text", 4, "ngIf"], [1, "sfd"], ["class", "button_wrap", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "button_wrap", 3, "routerLink", 4, "ngIf"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-title"], [1, "card-text"], ["target", "_blank", 1, "button_wrap", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right", "arrow", 2, "vertical-align", "bottom"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "button_wrap", 3, "routerLink"]],
      template: function ProjectsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsListComponent_div_6_Template, 9, 5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cards);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".projects_list[_ngcontent-%COMP%] {\n  \n}\n\n.projects_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n}\n\n.card_wrap[_ngcontent-%COMP%] {\n  margin: auto 0;\n  padding: 0 4% 5%;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n  margin-bottom: 3%;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  font-weight: 400;\n  margin-bottom: 2%;\n  padding-right: 5%;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.button_wrap[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.sfd[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0 !important;\n  padding-right: 0 !important;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  color: #001B4A;\n  padding-left: 1.5%;\n  transition: 0.5s ease;\n}\n\n.sfd[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: rgba(2, 138, 190, 0.6980392157);\n  transform: translateX(50%);\n  transition: 0.5s;\n}\n\n.sfd[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: rgba(2, 138, 190, 0.6980392157);\n  transition: 0.3s;\n}\n\n@media (max-width: 1280px) {\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .card-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .card-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .card-text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    margin-bottom: 2%;\n  }\n  .arrow[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n}\n@media (max-width: 576px) {\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .card-text[_ngcontent-%COMP%] {\n    padding-right: 5%;\n  }\n  .arrow[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .card_wrap[_ngcontent-%COMP%] {\n    padding: 3% 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBO3NCQUFBO0FBRUE7O0FBQ0E7RUFDQztxQkFBQTtFQUVDLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFNRjs7QUFIQTtFQUNFLHNDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUhBO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0FBQ0Y7QUFMQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFPRjtFQUxBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFPRjtBQUNGO0FBTEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU9GO0VBTEE7SUFDRSxpQkFBQTtFQU9GO0VBTEE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQU9GO0FBQ0Y7QUFMQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBT0Y7RUFMQTtJQUNFLGlCQUFBO0VBT0Y7RUFMQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBT0Y7RUFKQTtJQUNFLGVBQUE7RUFNRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzX2xpc3R7XHJcbi8qICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDsqL1xyXG59XHJcbi5wcm9qZWN0c193cmFwe1xyXG4gLyogbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7Ki9cclxuICBwYWRkaW5nOiAwIDYlO1xyXG59XHJcbi5jYXJkX3dyYXB7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgcGFkZGluZzogMCA0JSA1JTtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idXR0b25fd3JhcHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2ZkIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5hcnJvd3tcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNSU7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG59XHJcblxyXG4uc2ZkOmhvdmVyIHN2ZyB7XHJcbiAgY29sb3I6ICMwMjhBQkVCMjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uc2ZkOmhvdmVyIHNwYW4ge1xyXG4gIGNvbG9yOiAjMDI4QUJFQjI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC5jYXJkLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAuY2FyZC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhcmQtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICAuY2FyZC10aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuICAuYXJyb3d7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbiAgLmNhcmQtdGV4dHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIH1cclxuICAuYXJyb3d7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkX3dyYXB7XHJcbiAgICBwYWRkaW5nOiAzJSAxNSU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6723:
/*!*************************************************************************!*\
  !*** ./src/app/projectsPage/projects-title/projects-title.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsTitleComponent": () => (/* binding */ ProjectsTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProjectsTitleComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ProjectsTitleComponent_Factory(t) {
      return new (t || ProjectsTitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsTitleComponent,
      selectors: [["app-projects-title"]],
      decls: 15,
      vars: 0,
      consts: [[1, "projects_title"], [1, "projects_wrap"], [1, "part"], [1, "projects"], [1, "text"], [1, "textabout"], [1, "projects_text"]],
      template: function ProjectsTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041C\u044B \u0443\u043C\u0435\u0435\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0432 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0435\u0442\u0438\u043F\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br")(10, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u041C\u044B \u0445\u043E\u0442\u0438\u043C \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u043D\u0430\u0448\u0438\u043C\u0438 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438. \u0410 \u0442\u0430\u043A \u0436\u0435 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C \u0440\u0430\u0437\u043D\u043E\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u0430\u043C\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 - \u043E\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0432\u0435\u0431-\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043C\u0438 \u0438 API \u0434\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u043C\u0430\u0448\u0438\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: [".projects_title[_ngcontent-%COMP%] {\n  \n  background: rgba(214, 231, 238, 0.26);\n}\n\n.projects_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n  margin-bottom: 3%;\n}\n\n.projects[_ngcontent-%COMP%] {\n  padding: 3% 0 0;\n  \n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.textabout[_ngcontent-%COMP%] {\n  padding: 2% 0 4%;\n}\n\n.projects_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .projects_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 980px) {\n  .projects_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .projects_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .projects_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHNQYWdlL3Byb2plY3RzLXRpdGxlL3Byb2plY3RzLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0M7cUJBQUE7RUFFQyxxQ0FBQTtBQUNGOztBQUNBO0VBQ0U7b0JBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQTtvQkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQU1GOztBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFPRjtBQUNGO0FBTEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBT0Y7QUFDRjtBQUxBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFPRjtBQUNGO0FBTEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBT0Y7RUFMQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU9GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHNfdGl0bGV7XHJcbiAvKiBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDsqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMzEsIDIzOCwgMC4yNik7XHJcbn1cclxuLnByb2plY3RzX3dyYXB7XHJcbiAgLyptYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDsqL1xyXG4gIHBhZGRpbmc6IDAgNiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuLnByb2plY3Rze1xyXG4gIHBhZGRpbmc6IDMlIDAgMDtcclxuICAvKm1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMyMHB4OyovXHJcbn1cclxuLnRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZXh0YWJvdXR7XHJcbiAgcGFkZGluZzogMiUgMCA0JTtcclxufVxyXG4ucHJvamVjdHNfdGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICB9XHJcbiAgLnByb2plY3RzX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLnByb2plY3RzX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAucHJvamVjdHNfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG4gIC5wcm9qZWN0c190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3958:
/*!********************************************************!*\
  !*** ./src/app/projectsPage/projectsPage.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPageComponent": () => (/* binding */ ProjectsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homePage/footer/footer.component */ 5675);
/* harmony import */ var _projects_title_projects_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-title/projects-title.component */ 6723);
/* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-list/projects-list.component */ 8456);





class ProjectsPageComponent {
  constructor(titleService) {
    this.titleService = titleService;
  }
  ngOnInit() {
    this.titleService.setTitle('Проекты в сфере здравоохранения');
  }
  static {
    this.ɵfac = function ProjectsPageComponent_Factory(t) {
      return new (t || ProjectsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProjectsPageComponent,
      selectors: [["app-projectspage"]],
      decls: 4,
      vars: 0,
      consts: [[1, "projectsPage"]],
      template: function ProjectsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-projects-title")(2, "app-projects-list")(3, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _projects_title_projects_title_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsTitleComponent, _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsListComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 805:
/*!***********************************************************************!*\
  !*** ./src/app/servicesPage/services-list/services-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesListComponent": () => (/* binding */ ServicesListComponent)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 3235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ServicesListComponent_div_2_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const service_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](service_r1.name);
  }
}
function ServicesListComponent_div_2_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const service_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](service_r1.description);
  }
}
function ServicesListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ServicesListComponent_div_2_h2_2_Template, 2, 1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ServicesListComponent_div_2_h3_4_Template, 2, 1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", service_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", service_r1.description);
  }
}
class ServicesListComponent {
  constructor() {
    this.services = _services__WEBPACK_IMPORTED_MODULE_0__.services;
  }
  static {
    this.ɵfac = function ServicesListComponent_Factory(t) {
      return new (t || ServicesListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServicesListComponent,
      selectors: [["app-services-list"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "row"], ["class", "col-12 white_row k-alt", 4, "ngFor", "ngForOf"], [1, "col-12", "white_row", "k-alt"], [1, "service_title"], ["class", "text", 4, "ngIf"], [1, "textabout_wrap"], ["class", "text_about", 4, "ngIf"], [1, "text"], [1, "text_about"]],
      template: function ServicesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ServicesListComponent_div_2_Template, 5, 2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".white_row[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.k-alt[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgba(214, 231, 238, 0.26);\n}\n\n\n.text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n  margin-bottom: 2%;\n}\n\n\n.text_about[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .text[_ngcontent-%COMP%] {\n    margin-bottom: 1%;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n    margin-bottom: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VydmljZXNQYWdlL3NlcnZpY2VzLWxpc3Qvc2VydmljZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBQUE7QUFLQTtFQUNFLGNBQUE7QUFBRjs7QUFFQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBRUE7O0VBQUE7QUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTs7O0VBQUE7QUFJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFFRjtFQUFBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFFRjtBQUNGO0FBQUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBRUY7RUFBQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBRUY7QUFDRjtBQUFBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFFRjtFQUFBO0lBQ0UsaUJBQUE7RUFFRjtBQUNGO0FBQUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBRUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qLmNvbnRhaW5lci1mbHVpZHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDtcclxufSovXHJcblxyXG4ud2hpdGVfcm93e1xyXG4gIHBhZGRpbmc6IDMlIDYlO1xyXG59XHJcbi5rLWFsdDpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIzMSwgMjM4LCAwLjI2KTtcclxufVxyXG5cclxuLyouc2VydmljZV90aXRsZXtcclxuICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbn0qL1xyXG4udGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi8qLnRleHRhYm91dF93cmFwe1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG59Ki9cclxuLnRleHRfYWJvdXR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC50ZXh0X2Fib3V0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudGV4dF9hYm91dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3235:
/*!********************************************************!*\
  !*** ./src/app/servicesPage/services-list/services.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "services": () => (/* binding */ services)
/* harmony export */ });
const services = [{
  id: 1,
  name: 'Заголовок',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 2,
  name: 'Заголовок',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 3,
  name: 'Заголовок',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}, {
  id: 4,
  name: 'Заголовок',
  description: 'Повседневная практика показывает, что выбранный нами инновационный путь...'
}];

/***/ }),

/***/ 92:
/*!*************************************************************************!*\
  !*** ./src/app/servicesPage/services-title/services-title.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesTitleComponent": () => (/* binding */ ServicesTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ServicesTitleComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ServicesTitleComponent_Factory(t) {
      return new (t || ServicesTitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesTitleComponent,
      selectors: [["app-services-title"]],
      decls: 20,
      vars: 0,
      consts: [[1, "services_title"], [1, "services_wrap"], [1, "part"], [1, "services"], [1, "text"], [1, "textabout"], [1, "services_text"]],
      template: function ServicesTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0420\u0435\u0448\u0430\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0438 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438, \u043F\u0438\u0448\u0435\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0435 \u041F\u041E, \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0438 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041D\u0430\u0448\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u2014 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0435\u0442\u0438\u043F\u043E\u0432\u044B\u0445 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0441 \u0432\u044B\u0441\u043E\u043A\u0438\u043C\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043A \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0443 \u041F\u041E. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br")(13, "br")(14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041C\u044B \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0437\u0430\u0434\u0430\u0447 \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u2014 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0430\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439, \u0430 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u044F \u0435\u0451 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u043E\u0434\u0443\u043C\u0430\u043D\u043D\u044B\u0435 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B, \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438 \u043D\u0430\u0434\u0451\u0436\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C \u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u043C \u0432 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0438 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br")(17, "br")(18, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0438 \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u0432\u0430\u043C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u0432\u0435\u0431-\u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0440\u0435\u0448\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u0432\u0441\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0430. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: [".services_title[_ngcontent-%COMP%] {\n  \n  background: rgba(214, 231, 238, 0.26);\n}\n\n.services_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n  margin-bottom: 3%;\n}\n\n.services[_ngcontent-%COMP%] {\n  padding: 3% 0 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.textabout[_ngcontent-%COMP%] {\n  padding: 2% 0 4%;\n}\n\n.services_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .services_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 980px) {\n  .services_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .services_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .services_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n.mat-raised-button[_ngcontent-%COMP%] {\n  background-color: #001B4A;\n}\n\n@media (max-width: 768px) {\n  .button_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VydmljZXNQYWdlL3NlcnZpY2VzLXRpdGxlL3NlcnZpY2VzLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0M7cUJBQUE7RUFFQyxxQ0FBQTtBQUNGOztBQUNBO0VBQ0U7b0JBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFNRjs7QUFKQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFPRjtFQUxBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBT0Y7QUFDRjtBQUxBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU9GO0FBQ0Y7QUFMQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFPRjtFQUxBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBT0Y7QUFDRjtBQUxBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFPRjtBQUNGO0FBTEE7RUFDRSx5QkFBQTtBQU9GOztBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFNRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2VzX3RpdGxle1xyXG4gLyogbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7Ki9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgMjMxLCAyMzgsIDAuMjYpO1xyXG59XHJcbi5zZXJ2aWNlc193cmFwe1xyXG4gIC8qbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHg7Ki9cclxuICBwYWRkaW5nOiAwIDYlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5zZXJ2aWNlc3tcclxuICBwYWRkaW5nOiAzJSAwIDA7XHJcbn1cclxuLnRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZXh0YWJvdXR7XHJcbiAgcGFkZGluZzogMiUgMCA0JTtcclxufVxyXG4uc2VydmljZXNfdGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICB9XHJcbiAgLnNlcnZpY2VzX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLnNlcnZpY2VzX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAuc2VydmljZXNfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlc190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMUI0QTtcclxufVxyXG4vLyMwMDFCNEE7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYnV0dG9uX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbn1cclxuLy8uYnV0dG9uX3RleHR7XHJcbi8vICBmb250LXNpemU6IDI1cHg7XHJcbi8vICBsaW5lLWhlaWdodDogMzBweDtcclxuLy99XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4619:
/*!********************************************************!*\
  !*** ./src/app/servicesPage/servicesPage.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesPageComponent": () => (/* binding */ ServicesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _homePage_content_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homePage/content/content.component */ 8946);
/* harmony import */ var _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../homePage/footer/footer.component */ 5675);
/* harmony import */ var _services_title_services_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-title/services-title.component */ 92);





class ServicesPageComponent {
  constructor(titleService) {
    this.titleService = titleService;
  }
  ngOnInit() {
    this.titleService.setTitle('Услуги по разработке');
  }
  static {
    this.ɵfac = function ServicesPageComponent_Factory(t) {
      return new (t || ServicesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ServicesPageComponent,
      selectors: [["app-servicespage"]],
      decls: 4,
      vars: 0,
      consts: [[1, "servicesPage"]],
      template: function ServicesPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-services-title")(2, "app-content")(3, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_homePage_content_content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent, _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _services_title_services_title_component__WEBPACK_IMPORTED_MODULE_2__.ServicesTitleComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9928:
/*!*********************************************************************!*\
  !*** ./src/app/servicesPage/technologies/technologies.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnologiesComponent": () => (/* binding */ TechnologiesComponent)
/* harmony export */ });
/* harmony import */ var _technologies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technologies */ 5152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function TechnologiesComponent_div_8_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const technology_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r1.name);
  }
}
function TechnologiesComponent_div_8_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const technology_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r1.description);
  }
}
function TechnologiesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TechnologiesComponent_div_8_h3_2_Template, 2, 1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TechnologiesComponent_div_8_h4_4_Template, 2, 1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", technology_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", technology_r1.description);
  }
}
class TechnologiesComponent {
  constructor() {
    this.technologies = _technologies__WEBPACK_IMPORTED_MODULE_0__.technologies;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function TechnologiesComponent_Factory(t) {
      return new (t || TechnologiesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TechnologiesComponent,
      selectors: [["app-technologies"]],
      decls: 9,
      vars: 1,
      consts: [[1, "technologies"], [1, "technologies_wrap"], [1, "part"], [1, "container-fluid"], [1, "row"], [1, "col-12", "border-bottom", "border-secondary"], [1, "text"], ["class", "col-12 col-sm-6 border-bottom border-secondary", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "border-bottom", "border-secondary"], [1, "title_wrap"], ["class", "second_title", 4, "ngIf"], [1, "text_wrap"], ["class", "text_about", 4, "ngIf"], [1, "second_title"], [1, "text_about"]],
      template: function TechnologiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TechnologiesComponent_div_8_Template, 5, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.technologies);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".technologies[_ngcontent-%COMP%] {\n  \n  background: rgba(0, 27, 74, 0.08);\n}\n\n.technologies_wrap[_ngcontent-%COMP%] {\n  \n  padding: 4%;\n}\n\n\n.border-secondary[_ngcontent-%COMP%] {\n  border-color: #001B4A !important;\n}\n\n\n.text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n  margin-bottom: 2%;\n}\n\n.second_title[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 5% 0 3%;\n}\n\n\n.text_about[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 5%;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n  .second_title[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n  .second_title[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  .second_title[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .second_title[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VydmljZXNQYWdlL3RlY2hub2xvZ2llcy90ZWNobm9sb2dpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQztxQkFBQTtFQUVDLGlDQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtvQkFBQTtFQUVBLFdBQUE7QUFFRjs7QUFBQTs7RUFBQTtBQUdBO0VBQ0UsZ0NBQUE7QUFHRjs7QUFEQTs7OztFQUFBO0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBOztFQUFBO0FBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFGQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBS0Y7RUFIQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQUtGO0VBSEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFLRjtFQUhBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFLRjtFQUhBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFLRjtBQUNGO0FBSEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQUtGO0VBSEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFLRjtFQUhBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFLRjtFQUhBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBS0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50ZWNobm9sb2dpZXN7XHJcbiAvKiBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDsqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjcsIDc0LCAwLjA4KTtcclxufVxyXG4udGVjaG5vbG9naWVzX3dyYXB7XHJcbiAgLyptYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDsqL1xyXG4gIHBhZGRpbmc6IDQlO1xyXG59XHJcbi8qdGh7XHJcbiAgcGFkZGluZzogMDtcclxufSovXHJcbi5ib3JkZXItc2Vjb25kYXJ5e1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMUI0QSAhaW1wb3J0YW50O1xyXG59XHJcbi8qLnRlY2hub2xvZ2llc190aXRsZXtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn0qL1xyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLnNlY29uZF90aXRsZXtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiA1JSAwIDMlO1xyXG59XHJcbi8qLnVuaXRfd3JhcHtcclxuIHBhZGRpbmc6IDFyZW0gMDtcclxufSovXHJcbi50ZXh0X2Fib3V0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgfVxyXG4gIC5zZWNvbmRfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAuc2Vjb25kX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAudGV4dF9hYm91dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5zZWNvbmRfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbiAgLnNlY29uZF90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5152:
/*!***********************************************************!*\
  !*** ./src/app/servicesPage/technologies/technologies.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "technologies": () => (/* binding */ technologies)
/* harmony export */ });
const technologies = [{
  id: 1,
  name: 'Заголовок',
  description: 'текст текст текст текст текст текст текст текст текст'
}, {
  id: 2,
  name: 'Заголовок',
  description: 'текст текст текст текст текст текст текст текст текст'
}, {
  id: 3,
  name: 'Заголовок',
  description: 'текст текст текст текст текст текст текст текст текст'
}, {
  id: 4,
  name: 'Заголовок',
  description: 'текст текст текст текст текст текст текст текст текст'
}];

/***/ }),

/***/ 211:
/*!********************************************************************!*\
  !*** ./src/app/solutionsPage/description/description.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionComponent": () => (/* binding */ DescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ 3624);



function DescriptionComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1 == null ? null : comment_r1.description);
  }
}
class DescriptionComponent {
  constructor() {
    this.comments = [{
      id: 1,
      description: 'Консолидация данных из МИС qMS и других внешних источников;'
    }, {
      id: 2,
      description: 'Значительная экономия времени и ресурсов для проведения научных и аналитических исследований благодаря доступности данных;'
    }, {
      id: 3,
      description: 'Использование сторонних систем помощи принятия врачебных решений;'
    }, {
      id: 4,
      description: 'Мониторинг деятельности медицинской организации в режиме реального времени.'
    }];
  }
  ngOnInit() {}
  static {
    this.ɵfac = function DescriptionComponent_Factory(t) {
      return new (t || DescriptionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DescriptionComponent,
      selectors: [["app-description"]],
      decls: 10,
      vars: 3,
      consts: [[1, "solutions_title"], [1, "solutions_wrap"], [1, "text"], [1, "container-fluid"], [1, "row"], [1, "col-12", "col-sm-6", "gx-sm-5", "gx-4", "img_wrap"], [1, "img2", 3, "defaultImage", "lazyLoad"], [1, "col-12", "col-sm-6", "gx-sm-5", "gx-4", "solutions_text_wrap"], ["class", "list_wrap", 4, "ngFor", "ngForOf"], [1, "list_wrap"], [1, "row", "list_item"], [1, "col-11", "col-sm-10"], [1, "solutions_text"]],
      template: function DescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0420\u0415\u0428\u0410\u0415\u041C\u042B\u0415 \u041F\u0420\u041E\u0411\u041B\u0415\u041C\u042B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DescriptionComponent_div_9_Template, 5, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", "../../../assets/compressedImg/proqProekt-min.png")("lazyLoad", "../../../assets/img/proqProekt.png");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImageDirective],
      styles: [".solutions_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.img2[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.bold_text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.list_wrap[_ngcontent-%COMP%] {\n  padding: 10% 0 0;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  padding-bottom: 10%;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.solutions_text_wrap[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.solutions_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n  .bold_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 768px) {\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .bold_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 576px) {\n  .img2[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  .img_wrap[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .list_wrap[_ngcontent-%COMP%] {\n    padding: 5% 0 0;\n  }\n  .number[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29sdXRpb25zUGFnZS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsaUJBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7QUFRRjs7QUFOQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFOQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFTRjtFQVBBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFTRjtBQUNGO0FBUEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBU0Y7RUFQQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBU0Y7RUFQQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQVNGO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBU0Y7RUFQQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBU0Y7QUFDRjtBQVBBO0VBQ0U7SUFDRSxjQUFBO0VBU0Y7RUFQQTtJQUNFLGtCQUFBO0VBU0Y7RUFQQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQVNGO0VBUEE7SUFDRSxlQUFBO0VBU0Y7RUFQQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBU0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zb2x1dGlvbnNfd3JhcHtcclxuICBwYWRkaW5nOiAzJSA2JTtcclxufVxyXG4uaW1nMntcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRleHR7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYm9sZF90ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmxpc3Rfd3JhcHtcclxuICBwYWRkaW5nOiAxMCUgMCAwO1xyXG59XHJcbi5saXN0X2l0ZW17XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufVxyXG4ubGlzdF9pdGVtOmxhc3QtY2hpbGR7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLnNvbHV0aW9uc190ZXh0X3dyYXB7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuLnNvbHV0aW9uc190ZXh0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAuc29sdXRpb25zX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAuc29sdXRpb25zX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICAuYm9sZF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zb2x1dGlvbnNfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICAuYm9sZF90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuaW1nMntcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gIH1cclxuICAuaW1nX3dyYXB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5saXN0X3dyYXB7XHJcbiAgICBwYWRkaW5nOiA1JSAwIDA7XHJcbiAgfVxyXG4gIC5udW1iZXJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8022:
/*!******************************************************************************************!*\
  !*** ./src/app/solutionsPage/solution-opportunities/solution-opportunities.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionOpportunitiesComponent": () => (/* binding */ SolutionOpportunitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function SolutionOpportunitiesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "details")(2, "summary", 7)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const opportuniti_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opportuniti_r1 == null ? null : opportuniti_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opportuniti_r1 == null ? null : opportuniti_r1.description);
  }
}
class SolutionOpportunitiesComponent {
  constructor() {
    this.opportunities = [{
      id: 1,
      name: 'Консолидация данных из МИС qMS',
      description: 'Деятельность медицинской организации непрерывно связана с формированием ' + 'отчетной документации, ведением статистического и бухгалтерского учета. Выгрузка данных ' + 'из медицинской информационной системы – основа этих процессов.\n' + 'Наше программное обеспечение способно сократить временные издержки на формирование ' + 'выгрузок до 15 минут благодаря применению инновационных технологий в консолидации данных.\n'
    }, {
      id: 2,
      name: 'Конструктор запросов',
      description: 'Сведение таблиц и трансформация данных в них – одна из самых трудоемких ' + 'задач в подготовке данных, которая в особых случаях требует привлечения программистов.' + ' Конструктор запросов позволяет автоматизировать процессы формирования требуемых наборов' + ' без привлечения IT-специалистов.'
    }, {
      id: 3,
      name: 'Визуализация данных',
      description: 'Сводки информации по отделению позволяют отслеживать состояние пациентов,' + ' оперативно принимать решения о необходимости изменения методики лечения, оценивать' + ' эффективность деятельности медицинского персонала. Конструктор слайдов позволяет самостоятельно' + ' выбрать шаблоны отображения и заполнить их необходимой информацией. Для доступа к аналитике' + ' не требуется установка дополнительного ПО: веб-приложение доступно через браузер как на ' + 'компьютере, так и на мобильных устройствах (планшетах и телефонах).'
    }, {
      id: 4,
      name: 'Глубокая аналитика данных МИС',
      description: 'Доводилось ли Вам делать выборку пациентов, которые принимали указанные' + ' препараты на определенном этапе лечения конкретного заболевания? Формирование такой' + ' выборки вручную занимает недели в виду необходимости нажатий десятка кнопок графического' + ' интерфейса МИС и изучения медицинских записей. Алгоритмы полнотекстового поиска позволяют ' + 'решать такие задачи за считанные минуты.'
    }, {
      id: 5,
      name: 'Разработка и интеграция сторонних систем помощи принятия врачебных решений',
      description: 'Систематизация накопленных знаний и компетенций позволяет повысить' + ' качество оказываемой медицинской помощи, сократить издержки и повысить эффективность ' + 'работы медицинского учреждения. Комплексные СППВР достаточно сложно интегрировать в' + ' функциональные процессы МИС, однако алгоритмы консолидации данных могут обеспечить ' + 'алгоритмы машинного обучения  необходимыми данными, а пациентов – правильным и ' + 'своевременным врачебным решением. Наш совместный проект с ВЦЭРМ по ранней диагностике ' + 'сепсиса является наглядным подтверждением эффективности применяемого подхода.'
    }, {
      id: 6,
      name: 'Мониторинг программного комплекса',
      description: 'Сбои в работе программного и аппаратного обеспечения случаются в самый' + ' неподходящий момент. Используемые технологии и инструменты мониторинга позволяют' + ' не только своевременно отслеживать необходимые параметры, но и уведомлять системного' + ' администратора по почте и в мессенджерах.'
    }, {
      id: 7,
      name: 'Автоматизация тестирования, доставки и установки обновлений',
      description: 'Рутинные процессы тестирования, доставки и установки ' + 'обновлений тратят много сил и времени. Автоматизация этих процессов ' + 'позволила избежать многочисленных временных задержек и ошибок, а также ' + 'сократила время запуска новой версии ПО с нескольких часов до 5 минут.'
    }];
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SolutionOpportunitiesComponent_Factory(t) {
      return new (t || SolutionOpportunitiesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolutionOpportunitiesComponent,
      selectors: [["app-solution-opportunities"]],
      decls: 7,
      vars: 1,
      consts: [[1, "solution_title"], [1, "solution_wrap"], [1, "part", "container-fluid"], [1, "solution"], [1, "page-title", "text-center"], ["class", "blocktext ", 4, "ngFor", "ngForOf"], [1, "blocktext"], [1, "text"], [1, "text_about"]],
      template: function SolutionOpportunitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u041E\u0417\u041C\u041E\u0416\u041D\u041E\u0421\u0422\u0418");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SolutionOpportunitiesComponent_div_6_Template, 7, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opportunities);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".solution_title[_ngcontent-%COMP%] {\n  background-color: rgba(0, 27, 74, 0.08);\n}\n\n.solution_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.blocktext[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  \n  padding-bottom: 0.8em;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.text_about[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n    margin-bottom: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29sdXRpb25zUGFnZS9zb2x1dGlvbi1vcHBvcnR1bml0aWVzL3NvbHV0aW9uLW9wcG9ydHVuaXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBSUY7RUFGQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBSUY7QUFDRjtBQUZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQUlGO0VBRkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUlGO0FBQ0Y7QUFGQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBSUY7QUFDRjtBQUZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUlGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sdXRpb25fdGl0bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNywgNzQsIDAuMDgpO1xyXG59XHJcbi5zb2x1dGlvbl93cmFwe1xyXG4gIHBhZGRpbmc6IDMlIDYlO1xyXG59XHJcblxyXG4uYmxvY2t0ZXh0e1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAvKndpZHRoOiAyOGVtOyovXHJcbiAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xyXG5cclxufVxyXG4udGV4dHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50ZXh0X2Fib3V0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB9XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAudGV4dF9hYm91dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0X2Fib3V0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3738:
/*!****************************************************************************************!*\
  !*** ./src/app/solutionsPage/solution1/solution-content/solution-content.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionContentComponent": () => (/* binding */ SolutionContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function SolutionContentComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r2 == null ? null : comment_r2.description);
  }
}
function SolutionContentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r3 == null ? null : comment_r3.description, "");
  }
}
class SolutionContentComponent {
  constructor() {
    this.data = {
      id: 1,
      name: 'Информационно-аналитическая платформа ProQ (ИАП ProQ)',
      description: 'Современная ETL – система, совместимая с медицинской информационной системой qMS,\n' + 'предназначена для консолидации, последующей обработки и\n' + 'визуализации данных из медицинских информационных систем, баз данных и других источников.' + ' Данное решение, способствует высоким темпам развития интеграционных, научных и аналитических задач. Интегрируем ИАП ProQ с МИС, учётными и складскими системами, c CRM, с системами документооборота, а также с комплексными ERP-системами.',
      demo: 'http://proq.software/demo/',
      video: '../../../assets/img/VideoKonsolidatia.mp4',
      videoStop: '../../../assets/img/VideoKonsolidatia_Moment.jpg',
      imgPage: '../../../assets/img/proqProekt.png',
      imgMain: '../../../assets/img/Konsolidatiya.png',
      commentsName2: 'АРХИТЕКТУРА',
      imgDetali: '../../../assets/img/arxitectyra.png',
      comments: [{
        id: 1,
        description: 'Консолидация данных из МИС qMS и других внешних источников;'
      },
      // {
      //     id: 2,
      //     description: 'Сокращение времени проведения научных и аналитических исследований;',
      // },
      {
        id: 2,
        description: 'Значительная экономия времени и ресурсов для проведения научных и аналитических' + 'исследований благодаря доступности данных;'
      }, {
        id: 3,
        description: 'Использование сторонних систем помощи принятия врачебных решений;'
      }, {
        id: 4,
        description: 'Мониторинг деятельности медицинской организации в режиме реального времени.'
      }],
      comments2: [{
        id: 1,
        description: 'Каждый модуль может существовать независимо друг от друга совместно c различными сторонними решениями'
      }, {
        id: 2,
        description: 'Централизованная панель управленияпрограммного комплекса, с возможностью уведомления системного администратора с использованием мессенджеров'
      }, {
        id: 3,
        description: 'Современная программная платформа на основе Docker Swarm'
      }, {
        id: 4,
        description: 'Продолжительность актуализации данных составляет 15 минут;'
      }
      // {
      //   id: 5,
      //   description: 'Высокий уровень автоматизации сложных технологических процессов;',
      // },
      // {
      //   id: 6,
      //   description: 'Минимальная нагрузка на штатных технических специалистов;',
      // },
      ],
      specifications: [{
        id: 1,
        name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
        description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций'
      }, {
        id: 2,
        name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
        description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' + 'Основная цель – формирование\n' + 'универсальных запросов к источникам\n' + 'информации, объединение и обработка\n' + 'результатов запросов'
      }, {
        id: 3,
        name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
        description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' + 'Широкие функциональные возможности.Современный дизайн.' + 'Высокая скорость изменений.'
      }, {
        id: 4,
        name: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
        description: 'роцессор от 3000 МГц, кэш от 2 МБ Оперативная память: для 32 битной системы 2Гб, 64 — 4Гб Жесткий диск: скоростью 7200 кэш от 32 гб, лучше ssd.'
      }],
      opportunities: [{
        id: 1,
        name: 'Консолидация данных из МИС qMS',
        description: 'Деятельность медицинской организации непрерывно связана с формированием ' + 'отчетной документации, ведением статистического и бухгалтерского учета. Выгрузка данных ' + 'из медицинской информационной системы – основа этих процессов.\n' + 'Наше программное обеспечение способно сократить временные издержки на формирование ' + 'выгрузок до 15 минут благодаря применению инновационных технологий в консолидации данных;\n'
      }, {
        id: 2,
        name: 'Конструктор запросов',
        description: 'Сведение таблиц и трансформация данных в них – одна из самых трудоемких ' + 'задач в подготовке данных, которая в особых случаях требует привлечения программистов.' + 'Конструктор запросов позволяет автоматизировать процессы формирования требуемых наборов' + ' без привлечения IT-специалистов.'
      }, {
        id: 3,
        name: 'Визуализация данных',
        description: 'Сводки информации по отделению позволяют отслеживать состояние пациентов,' + ' оперативно принимать решения о необходимости изменения методики лечения, оценивать' + ' эффективность деятельности медицинского персонала. Конструктор слайдов позволяет самостоятельно' + ' выбрать шаблоны отображения и заполнить их необходимой информацией.Для доступа к аналитике' + ' не требуется установка дополнительного ПО: веб-приложение доступно через браузер как на ' + 'компьютере, так и на мобильных устройствах (планшетах и телефонах).'
      }, {
        id: 4,
        name: 'Глубокая аналитика данных МИС',
        description: 'Доводилось ли Вам делать выборку пациентов, которые принимали указанные' + ' препараты на определенном этапе лечения конкретного заболевания? Формирование такой' + ' выборки вручную занимает недели в виду необходимости нажатий десятка кнопок графического' + ' интерфейса МИС и изучения медицинских записей. Алгоритмы полнотекстового поиска позволяют ' + 'решать такие задачи за считанные минуты.'
      }, {
        id: 5,
        name: 'Разработка и интеграция сторонних систем помощи принятия врачебных решений',
        description: 'Систематизация накопленных знаний и компетенций позволяет повысить' + ' качество оказываемой медицинской помощи, сократить издержки и повысить эффективность ' + 'работы медицинского учреждения. Комплексные СППВР достаточно сложно интегрировать в' + ' функциональные процессы МИС, однако алгоритмы консолидации данных могут обеспечить ' + 'алгоритмы машинного обучения  необходимыми данными, а пациентов – правильным и ' + 'своевременным врачебным решением. Наш совместный проект с ВЦЭРМ по ранней диагностике ' + 'сепсиса является наглядным подтверждением эффективности применяемого подхода.'
      }, {
        id: 6,
        name: 'Мониторинг программного комплекса',
        description: 'Сбои в работе программного и аппаратного обеспечения случаются в самый' + ' неподходящий момент. Используемые технологии и инструменты мониторинга позволяют' + ' не только своевременно отслеживать необходимые параметры, но и уведомлять системного' + ' администратора по почте и в мессенджерах;'
      }, {
        id: 7,
        name: 'Автоматизация тестирования, доставки и установки обновлений',
        description: 'Рутинные процессы тестирования, доставки и установки ' + 'обновлений тратят много сил и времени. Автоматизация этих процессов ' + 'позволила избежать многочисленных временных задержек и ошибок, а также ' + 'сократила время запуска новой версии ПО с нескольких часов до 5 минут;'
      }]
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SolutionContentComponent_Factory(t) {
      return new (t || SolutionContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolutionContentComponent,
      selectors: [["app-solution-content"]],
      inputs: {
        data: "data"
      },
      decls: 18,
      vars: 5,
      consts: [[1, "solutions_title"], [1, "solutions_wrap"], [1, "text"], [1, "container-fluid"], [1, "row"], [1, "col-12", "col-sm-6", "gx-sm-5", "gx-4", "img_wrap"], [1, "img2", 3, "src"], [1, "col-12", "col-sm-6", "gx-sm-5", "gx-4", "solutions_text_wrap"], ["class", "list_wrap", 4, "ngFor", "ngForOf"], [1, "list_wrap"], [1, "row", "list_item"], [1, "col-11", "col-sm-10"], [1, "solutions_text"]],
      template: function SolutionContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0420\u0415\u0428\u0410\u0415\u041C\u042B\u0415 \u041F\u0420\u041E\u0411\u041B\u0415\u041C\u042B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SolutionContentComponent_div_9_Template, 5, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "div", 4)(14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SolutionContentComponent_div_15_Template, 5, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.imgMain, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.comments);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.commentsName2, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.comments2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data == null ? null : ctx.data.imgDetali, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".solutions_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.img2[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.bold_text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.list_wrap[_ngcontent-%COMP%] {\n  padding: 10% 0 0;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  padding-bottom: 10%;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.solutions_text_wrap[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.solutions_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n  .bold_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 768px) {\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .bold_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 576px) {\n  .img2[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  .img_wrap[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .list_wrap[_ngcontent-%COMP%] {\n    padding: 5% 0 0;\n  }\n  .number[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29sdXRpb25zUGFnZS9zb2x1dGlvbjEvc29sdXRpb24tY29udGVudC9zb2x1dGlvbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVNGOztBQU5BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVNGO0VBUEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQVNGO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFTRjtFQVBBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFTRjtFQVBBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBU0Y7QUFDRjtBQVBBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFTRjtFQVBBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFTRjtBQUNGO0FBUEE7RUFDRTtJQUNFLGNBQUE7RUFTRjtFQVBBO0lBQ0Msa0JBQUE7RUFTRDtFQVBBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBU0Y7RUFQQTtJQUNFLGVBQUE7RUFTRjtFQVBBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUFTRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNvbHV0aW9uc193cmFwe1xyXG4gIHBhZGRpbmc6IDMlIDYlO1xyXG59XHJcbi5pbWcye1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4udGV4dHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5ib2xkX3RleHR7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubGlzdF93cmFwe1xyXG4gIHBhZGRpbmc6IDEwJSAwIDA7XHJcbn1cclxuLmxpc3RfaXRlbXtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG59XHJcbi5saXN0X2l0ZW06bGFzdC1jaGlsZHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4uc29sdXRpb25zX3RleHRfd3JhcHtcclxuICBtYXJnaW46IGF1dG8gMDtcclxufVxyXG4uc29sdXRpb25zX3RleHR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC5zb2x1dGlvbnNfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG4gIC5zb2x1dGlvbnNfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG4gIC5ib2xkX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNvbHV0aW9uc190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5ib2xkX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5pbWcye1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgfVxyXG4gIC5pbWdfd3JhcHtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICAubGlzdF93cmFwe1xyXG4gICAgcGFkZGluZzogNSUgMCAwO1xyXG4gIH1cclxuICAubnVtYmVye1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8387:
/*!********************************************************************************************!*\
  !*** ./src/app/solutionsPage/solution1/solution-paragraph/solution-paragraph.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionParagraphComponent": () => (/* binding */ SolutionParagraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function SolutionParagraphComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "details")(2, "summary", 7)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const opportuniti_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opportuniti_r1 == null ? null : opportuniti_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opportuniti_r1 == null ? null : opportuniti_r1.description);
  }
}
class SolutionParagraphComponent {
  constructor() {
    this.data = {
      id: 1,
      name: 'Информационно-аналитическая платформа ProQ (ИАП ProQ)',
      description: 'Современная ETL – система, совместимая с медицинской информационной системой qMS,\n' + '                предназначена для консолидации, последующей обработки и\n' + '                визуализации данных из медицинских информационных систем, баз данных и других источников.' + 'Данное решение, способствует высоким темпам развития интеграционных, научных и аналитических задач.',
      demo: 'http://proq.software/demo/',
      video: '../../../assets/img/VideoKonsolidatia.mp4',
      videoStop: '../../../assets/img/VideoKonsolidatia_Moment.jpg',
      imgPage: '../../../assets/img/proqProekt.png',
      imgMain: '../../../assets/img/Konsolidatiya.png',
      commentsName2: 'АРХИТЕКТУРА',
      imgDetali: '../../../assets/img/arxitectyra.png',
      comments: [{
        id: 1,
        description: 'Интегрируем ИАП ProQ с МИС qMS, учётными и складскими системами, c CRM, с системами документооборота, а также с комплексными ERP-системами.'
      }, {
        id: 2,
        description: 'Когда все в одном месте ваш специалист без необходимости кодирования способен запросить любой набор данных в любое время'
      }, {
        id: 3,
        description: 'Значительная экономия времени и ресурсов благодаря доступности данных'
      }, {
        id: 4,
        description: 'До 90% современного ПО для обработки и анализа данных  бесплатные'
      }
      // {
      //   id: 5,
      //   description: 'Возможность работы с привычными табличными интерфейсами',
      // },
      ],
      comments2: [{
        id: 1,
        description: 'Каждый модуль может существовать независимо друг от друга совместно c различными сторонними решениями'
      }, {
        id: 2,
        description: 'Централизованная панель управленияпрограммного комплекса, с возможностью уведомления системного администратора с использованием мессенджеров'
      }, {
        id: 3,
        description: 'Современная программная платформа на основе Docker Swarm'
      }],
      specifications: [{
        id: 1,
        name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
        description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций'
      }, {
        id: 2,
        name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
        description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' + 'Основная цель – формирование\n' + 'универсальных запросов к источникам\n' + 'информации, объединение и обработка\n' + 'результатов запросов'
      }, {
        id: 3,
        name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
        description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' + 'Широкие функциональные возможности.Современный дизайн.' + 'Высокая скорость изменений.'
      }, {
        id: 4,
        name: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
        description: 'роцессор от 3000 МГц, кэш от 2 МБ Оперативная память: для 32 битной системы 2Гб, 64 — 4Гб Жесткий диск: скоростью 7200 кэш от 32 гб, лучше ssd.'
      }],
      opportunities: [{
        id: 1,
        name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
        description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций'
      }, {
        id: 2,
        name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
        description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' + 'Основная цель – формирование\n' + 'универсальных запросов к источникам\n' + 'информации, объединение и обработка\n' + 'результатов запросов'
      }, {
        id: 3,
        name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
        description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' + 'Широкие функциональные возможности.Современный дизайн.' + 'Высокая скорость изменений.'
      }]
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SolutionParagraphComponent_Factory(t) {
      return new (t || SolutionParagraphComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolutionParagraphComponent,
      selectors: [["app-solution-paragraph"]],
      inputs: {
        data: "data"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "solution_title"], [1, "solution_wrap"], [1, "part"], [1, "solution"], [1, "page-title", "text-center"], ["class", "blocktext ", "style", "font-size: 2em", 4, "ngFor", "ngForOf"], [1, "blocktext", 2, "font-size", "2em"], [1, "text"], [1, "text_about"]],
      template: function SolutionParagraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u041E\u0417\u041C\u041E\u0416\u041D\u041E\u0421\u0422\u0418");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SolutionParagraphComponent_div_6_Template, 7, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.opportunities);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".solution_title[_ngcontent-%COMP%] {\n  background-color: rgba(0, 27, 74, 0.08);\n}\n\n.solution_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.blocktext[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 28em;\n  padding-bottom: 0.8em;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.solution_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .solution_text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .solution_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .solution_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n    margin-bottom: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29sdXRpb25zUGFnZS9zb2x1dGlvbjEvc29sdXRpb24tcGFyYWdyYXBoL3NvbHV0aW9uLXBhcmFncmFwaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFJRjtFQUZBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFJRjtBQUNGO0FBRkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBSUY7RUFGQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBSUY7QUFDRjtBQUZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFJRjtBQUNGO0FBRkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBSUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zb2x1dGlvbl90aXRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI3LCA3NCwgMC4wOCk7XHJcbn1cclxuLnNvbHV0aW9uX3dyYXB7XHJcbiAgcGFkZGluZzogMyUgNiU7XHJcbn1cclxuXHJcbi5ibG9ja3RleHR7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAyOGVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcclxuXHJcbn1cclxuLnRleHR7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc29sdXRpb25fdGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC5zb2x1dGlvbl90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbiAgLnNvbHV0aW9uX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc29sdXRpb25fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3082:
/*!************************************************************************************!*\
  !*** ./src/app/solutionsPage/solution1/solution-title/solution-title.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionTitleComponent": () => (/* binding */ SolutionTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SolutionTitleComponent {
  constructor() {
    this.data = {
      id: 1,
      name: 'Информационно-аналитическая платформа ProQ (ИАП ProQ)',
      description: 'Современная ETL – система, совместимая с медицинской информационной системой qMS,\n' + 'предназначена для консолидации, последующей обработки и\n' + 'визуализации данных из медицинских информационных систем, баз данных и других источников.' + ' Данное решение, способствует высоким темпам развития интеграционных, научных и аналитических задач. Интегрируем ИАП ProQ с МИС, учётными и складскими системами, c CRM, с системами документооборота, а также с комплексными ERP-системами.',
      demo: 'http://proq.software/demo/',
      video: '../../../assets/img/VideoKonsolidatia.mp4',
      videoStop: '../../../assets/img/VideoKonsolidatia_Moment.jpg',
      imgPage: '../../../assets/img/proqProekt.png',
      imgMain: '../../../assets/img/Konsolidatiya.png',
      commentsName2: 'АРХИТЕКТУРА',
      imgDetali: '../../../assets/img/arxitectyra.png',
      comments: [{
        id: 1,
        description: 'Консолидация данных из МИС qMS и других внешних источников;'
      },
      // {
      //     id: 2,
      //     description: 'Сокращение времени проведения научных и аналитических исследований;',
      // },
      {
        id: 2,
        description: 'Значительная экономия времени и ресурсов для проведения научных и аналитических' + 'исследований благодаря доступности данных;'
      }, {
        id: 3,
        description: 'Использование сторонних систем помощи принятия врачебных решений;'
      }, {
        id: 4,
        description: 'Мониторинг деятельности медицинской организации в режиме реального времени.'
      }],
      comments2: [{
        id: 1,
        description: 'Каждый модуль может существовать независимо друг от друга совместно c различными сторонними решениями'
      }, {
        id: 2,
        description: 'Централизованная панель управленияпрограммного комплекса, с возможностью уведомления системного администратора с использованием мессенджеров'
      }, {
        id: 3,
        description: 'Современная программная платформа на основе Docker Swarm'
      }, {
        id: 4,
        description: 'Продолжительность актуализации данных составляет 15 минут;'
      }
      // {
      //   id: 5,
      //   description: 'Высокий уровень автоматизации сложных технологических процессов;',
      // },
      // {
      //   id: 6,
      //   description: 'Минимальная нагрузка на штатных технических специалистов;',
      // },
      ],
      specifications: [{
        id: 1,
        name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
        description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций'
      }, {
        id: 2,
        name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
        description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' + 'Основная цель – формирование\n' + 'универсальных запросов к источникам\n' + 'информации, объединение и обработка\n' + 'результатов запросов'
      }, {
        id: 3,
        name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
        description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' + 'Широкие функциональные возможности.Современный дизайн.' + 'Высокая скорость изменений.'
      }, {
        id: 4,
        name: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
        description: 'роцессор от 3000 МГц, кэш от 2 МБ Оперативная память: для 32 битной системы 2Гб, 64 — 4Гб Жесткий диск: скоростью 7200 кэш от 32 гб, лучше ssd.'
      }],
      opportunities: [{
        id: 1,
        name: 'Консолидация данных из МИС qMS',
        description: 'Деятельность медицинской организации непрерывно связана с формированием ' + 'отчетной документации, ведением статистического и бухгалтерского учета. Выгрузка данных ' + 'из медицинской информационной системы – основа этих процессов.\n' + 'Наше программное обеспечение способно сократить временные издержки на формирование ' + 'выгрузок до 15 минут благодаря применению инновационных технологий в консолидации данных;\n'
      }, {
        id: 2,
        name: 'Конструктор запросов',
        description: 'Сведение таблиц и трансформация данных в них – одна из самых трудоемких ' + 'задач в подготовке данных, которая в особых случаях требует привлечения программистов.' + 'Конструктор запросов позволяет автоматизировать процессы формирования требуемых наборов' + ' без привлечения IT-специалистов.'
      }, {
        id: 3,
        name: 'Визуализация данных',
        description: 'Сводки информации по отделению позволяют отслеживать состояние пациентов,' + ' оперативно принимать решения о необходимости изменения методики лечения, оценивать' + ' эффективность деятельности медицинского персонала. Конструктор слайдов позволяет самостоятельно' + ' выбрать шаблоны отображения и заполнить их необходимой информацией.Для доступа к аналитике' + ' не требуется установка дополнительного ПО: веб-приложение доступно через браузер как на ' + 'компьютере, так и на мобильных устройствах (планшетах и телефонах).'
      }, {
        id: 4,
        name: 'Глубокая аналитика данных МИС',
        description: 'Доводилось ли Вам делать выборку пациентов, которые принимали указанные' + ' препараты на определенном этапе лечения конкретного заболевания? Формирование такой' + ' выборки вручную занимает недели в виду необходимости нажатий десятка кнопок графического' + ' интерфейса МИС и изучения медицинских записей. Алгоритмы полнотекстового поиска позволяют ' + 'решать такие задачи за считанные минуты.'
      }, {
        id: 5,
        name: 'Разработка и интеграция сторонних систем помощи принятия врачебных решений',
        description: 'Систематизация накопленных знаний и компетенций позволяет повысить' + ' качество оказываемой медицинской помощи, сократить издержки и повысить эффективность ' + 'работы медицинского учреждения. Комплексные СППВР достаточно сложно интегрировать в' + ' функциональные процессы МИС, однако алгоритмы консолидации данных могут обеспечить ' + 'алгоритмы машинного обучения  необходимыми данными, а пациентов – правильным и ' + 'своевременным врачебным решением. Наш совместный проект с ВЦЭРМ по ранней диагностике ' + 'сепсиса является наглядным подтверждением эффективности применяемого подхода.'
      }, {
        id: 6,
        name: 'Мониторинг программного комплекса',
        description: 'Сбои в работе программного и аппаратного обеспечения случаются в самый' + ' неподходящий момент. Используемые технологии и инструменты мониторинга позволяют' + ' не только своевременно отслеживать необходимые параметры, но и уведомлять системного' + ' администратора по почте и в мессенджерах;'
      }, {
        id: 7,
        name: 'Автоматизация тестирования, доставки и установки обновлений',
        description: 'Рутинные процессы тестирования, доставки и установки ' + 'обновлений тратят много сил и времени. Автоматизация этих процессов ' + 'позволила избежать многочисленных временных задержек и ошибок, а также ' + 'сократила время запуска новой версии ПО с нескольких часов до 5 минут;'
      }]
    };
  }
  ngOnInit() {
    console.log(this.data);
  }
  static {
    this.ɵfac = function SolutionTitleComponent_Factory(t) {
      return new (t || SolutionTitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolutionTitleComponent,
      selectors: [["app-solution-title"]],
      inputs: {
        data: "data"
      },
      decls: 9,
      vars: 2,
      consts: [[1, "solution_title"], [1, "solution_wrap"], [1, "part"], [1, "solution"], [1, "text"], [1, "textabout"], [1, "solution_text"]],
      template: function SolutionTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.description);
        }
      },
      styles: [".solution_wrap[_ngcontent-%COMP%] {\n  padding: 0 6%;\n  margin-bottom: 3%;\n}\n\n.solution[_ngcontent-%COMP%] {\n  padding: 3% 0 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.textabout[_ngcontent-%COMP%] {\n  padding: 2% 0 0;\n}\n\n.solution_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .solution_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 980px) {\n  .solution_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .solution_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .solution_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29sdXRpb25zUGFnZS9zb2x1dGlvbjEvc29sdXRpb24tdGl0bGUvc29sdXRpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU1GO0VBSkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFNRjtBQUNGO0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU1GO0VBSkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFNRjtBQUNGO0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBTUY7RUFKQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU1GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sdXRpb25fd3JhcHtcclxuICBwYWRkaW5nOiAwIDYlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5zb2x1dGlvbntcclxuICBwYWRkaW5nOiAzJSAwIDA7XHJcbn1cclxuLnRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZXh0YWJvdXR7XHJcbiAgcGFkZGluZzogMiUgMCAwO1xyXG59XHJcbi5zb2x1dGlvbl90ZXh0e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxuICAuc29sdXRpb25fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuc29sdXRpb25fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgfVxyXG4gIC5zb2x1dGlvbl90ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbiAgLnNvbHV0aW9uX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4285:
/*!***********************************************************************************!*\
  !*** ./src/app/solutionsPage/solution1/solution1-list/solution-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionListComponent": () => (/* binding */ SolutionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 6246);



function SolutionListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h3", 12)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11)(6, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const blok_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blok_r1 == null ? null : blok_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blok_r1 == null ? null : blok_r1.description);
  }
}
class SolutionListComponent {
  constructor() {
    //  elements = elements;
    this.data = {
      id: 1,
      name: 'Информационно-аналитическая платформа ProQ (ИАП ProQ)',
      description: 'Современная ETL – система, совместимая с медицинской информационной системой qMS,\n' + 'предназначена для консолидации, последующей обработки и\n' + 'визуализации данных из медицинских информационных систем, баз данных и других источников.' + 'Данное решение, способствует высоким темпам развития интеграционных, научных и аналитических задач.',
      demo: 'http://proq.software/demo/',
      video: '../../../assets/img/VideoKonsolidatia.mp4',
      videoStop: '../../../assets/img/VideoKonsolidatia_Moment.jpg',
      imgPage: '../../../assets/img/proqProekt.png',
      imgMain: '../../../assets/img/Konsolidatiya.png',
      commentsName2: 'АРХИТЕКТУРА',
      imgDetali: '../../../assets/img/arxitectyra.png',
      comments: [{
        id: 1,
        description: 'Интегрируем ИАП ProQ с МИС qMS, учётными и складскими системами, c CRM, с системами документооборота, а также с комплексными ERP-системами.'
      }, {
        id: 2,
        description: 'Когда все в одном месте ваш специалист без необходимости кодирования способен запросить любой набор данных в любое время'
      }, {
        id: 3,
        description: 'Значительная экономия времени и ресурсов благодаря доступности данных'
      }, {
        id: 4,
        description: 'До 90% современного ПО для обработки и анализа данных  бесплатные'
      }
      // {
      //   id: 5,
      //   description: 'Возможность работы с привычными табличными интерфейсами',
      // },
      ],
      comments2: [{
        id: 1,
        description: 'Каждый модуль может существовать независимо друг от друга совместно c различными сторонними решениями'
      }, {
        id: 2,
        description: 'Централизованная панель управленияпрограммного комплекса, с возможностью уведомления системного администратора с использованием мессенджеров'
      }, {
        id: 3,
        description: 'Современная программная платформа на основе Docker Swarm'
      }],
      specifications: [{
        id: 1,
        name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
        description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций'
      }, {
        id: 2,
        name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
        description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' + 'Основная цель – формирование\n' + 'универсальных запросов к источникам\n' + 'информации, объединение и обработка\n' + 'результатов запросов'
      }, {
        id: 3,
        name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
        description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' + 'Широкие функциональные возможности.Современный дизайн.' + 'Высокая скорость изменений.'
      }, {
        id: 4,
        name: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
        description: 'роцессор от 3000 МГц, кэш от 2 МБ Оперативная память: для 32 битной системы 2Гб, 64 — 4Гб Жесткий диск: скоростью 7200 кэш от 32 гб, лучше ssd.'
      }],
      opportunities: [{
        id: 1,
        name: 'БЛОК ФОРМИРОВАНИЯ ' + 'ИСТОЧНИКОВ ДАННЫХ',
        //img: '../../../assets/img/BlokVebInterfeisov.png',
        description: 'Данный блок решает задачи миграции из различных источников и баз данных, в том числе из МИС qms, их предварительной обработки, хранения и формирования API для последующих интеграций'
      }, {
        id: 2,
        name: 'БЛОК ОБЪЕДИНЕНИЯ И\n' + 'ОБРАБОТКИ ДАННЫХ',
        //img: '../../../assets/img/BlokVebInterfeisov.png',
        description: 'Конструктор понятный не только IT-специалисту. Данный блок рассматривает базы данных и API как единую сущность - источник информации. \n' + 'Основная цель – формирование\n' + 'универсальных запросов к источникам\n' + 'информации, объединение и обработка\n' + 'результатов запросов'
      }, {
        id: 3,
        name: 'БЛОК ВЕБ-ИНТЕРФЕЙСОВ',
        //img: '../../../assets/img/BlokVebInterfeisov.png',
        description: 'Обработка данных может выполняться как на стороне бекенда, так и на самом веб-интерфейсе в нативном режиме.\n' + 'Широкие функциональные возможности.Современный дизайн.' + 'Высокая скорость изменений.'
      }]
    };
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SolutionListComponent_Factory(t) {
      return new (t || SolutionListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolutionListComponent,
      selectors: [["app-solution-list"]],
      inputs: {
        data: "data"
      },
      decls: 12,
      vars: 3,
      consts: [[1, "solutions_title"], [1, "solutions_wrap"], [1, "text_wrap"], [1, "text"], [1, "container-fluid"], [1, "row"], ["class", "col-12 col-sm-6 second_col", 4, "ngFor", "ngForOf"], [1, "button_demo"], [3, "href"], ["mat-raised-button", "", "color", "primary", 1, "button_text", 3, "disabled"], [1, "col-12", "col-sm-6", "second_col"], [1, "text_about"], [1, "solutions_text"]],
      template: function SolutionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0420\u0435\u0448\u0430\u0435\u043C\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SolutionListComponent_div_7_Template, 8, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "a", 8)(10, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0414\u0435\u043C\u043E ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.specifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.data == null ? null : ctx.data.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.data == null ? null : ctx.data.demo));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
      styles: [".solutions_wrap[_ngcontent-%COMP%] {\n  padding: 3% 6%;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.solutions_text_wrap[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n\n.solutions_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 2%;\n}\n\n.img_1[_ngcontent-%COMP%] {\n  max-width: 10%;\n  padding-bottom: 2%;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #001B4A;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29sdXRpb25zUGFnZS9zb2x1dGlvbjEvc29sdXRpb24xLWxpc3Qvc29sdXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBTUY7RUFKQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQU1GO0VBSkE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQU1GO0FBQ0Y7QUFKQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFNRjtBQUNGO0FBSkE7RUFDRSx5QkFBQTtBQU1GIiwic291cmNlc0NvbnRlbnQiOlsiLnNvbHV0aW9uc193cmFwe1xyXG4gIHBhZGRpbmc6IDMlIDYlO1xyXG59XHJcbi50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zb2x1dGlvbnNfdGV4dF93cmFwe1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG59XHJcbi5zb2x1dGlvbnNfdGV4dHtcclxuICBjb2xvcjogIzAwMUI0QTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLmltZ18xe1xyXG4gIG1heC13aWR0aDogMTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAuc29sdXRpb25zX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIH1cclxuICAuc29sdXRpb25zX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc29sdXRpb25zX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMUI0QTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2373:
/*!****************************************************************!*\
  !*** ./src/app/solutionsPage/solution1/solution1.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Solution1Component": () => (/* binding */ Solution1Component)
/* harmony export */ });
/* harmony import */ var _homePage_solutions_solutions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../homePage/solutions/solutions */ 6797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../homePage/footer/footer.component */ 5675);
/* harmony import */ var _solution_title_solution_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution-title/solution-title.component */ 3082);
/* harmony import */ var _solution_content_solution_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solution-content/solution-content.component */ 3738);
/* harmony import */ var _solution1_list_solution_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solution1-list/solution-list.component */ 4285);
/* harmony import */ var _solution_paragraph_solution_paragraph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solution-paragraph/solution-paragraph.component */ 8387);







class Solution1Component {
  constructor() {
    this.solutions = _homePage_solutions_solutions__WEBPACK_IMPORTED_MODULE_0__.solutions;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function Solution1Component_Factory(t) {
      return new (t || Solution1Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: Solution1Component,
      selectors: [["app-solution1"]],
      decls: 6,
      vars: 4,
      consts: [[3, "data"]],
      template: function Solution1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-solution-title", 0)(2, "app-solution-content", 0)(3, "app-solution-list", 0)(4, "app-solution-paragraph", 0)(5, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.solutions[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.solutions[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.solutions[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.solutions[1]);
        }
      },
      dependencies: [_homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _solution_title_solution_title_component__WEBPACK_IMPORTED_MODULE_2__.SolutionTitleComponent, _solution_content_solution_content_component__WEBPACK_IMPORTED_MODULE_3__.SolutionContentComponent, _solution1_list_solution_list_component__WEBPACK_IMPORTED_MODULE_4__.SolutionListComponent, _solution_paragraph_solution_paragraph_component__WEBPACK_IMPORTED_MODULE_5__.SolutionParagraphComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9881:
/*!**************************************************************************!*\
  !*** ./src/app/solutionsPage/solutions-list/solutions-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionsListComponent": () => (/* binding */ SolutionsListComponent)
/* harmony export */ });
/* harmony import */ var _homePage_solutions_solutions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../homePage/solutions/solutions */ 6797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ 3624);




function SolutionsListComponent_div_4_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const specification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultImage", specification_r1.imgDefault)("lazyLoad", specification_r1.img);
  }
}
function SolutionsListComponent_div_4_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](specification_r1.name);
  }
}
function SolutionsListComponent_div_4_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](specification_r1.description);
  }
}
function SolutionsListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolutionsListComponent_div_4_img_2_Template, 1, 2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SolutionsListComponent_div_4_h2_3_Template, 2, 1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SolutionsListComponent_div_4_h3_5_Template, 2, 1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", specification_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", specification_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", specification_r1.description);
  }
}
class SolutionsListComponent {
  constructor() {
    this.specifications = _homePage_solutions_solutions__WEBPACK_IMPORTED_MODULE_0__.specifications;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SolutionsListComponent_Factory(t) {
      return new (t || SolutionsListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SolutionsListComponent,
      selectors: [["app-solutions-list"]],
      decls: 5,
      vars: 1,
      consts: [[1, "solutions"], [1, "solutions_wrap"], [1, "container-fluid"], [1, "row"], ["class", "col-12 col-sm-6 border-bottom border-secondary part", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "border-bottom", "border-secondary", "part"], [1, "solutions_title"], ["class", "card-img-top", "alt", "...", 3, "defaultImage", "lazyLoad", 4, "ngIf"], ["class", "text", 4, "ngIf"], ["class", "text_about", 4, "ngIf"], ["alt", "...", 1, "card-img-top", 3, "defaultImage", "lazyLoad"], [1, "text"], [1, "text_about"]],
      template: function SolutionsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SolutionsListComponent_div_4_Template, 6, 3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.specifications);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImageDirective],
      styles: [".container[_ngcontent-%COMP%] {\n  \n}\n\n.solutions_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n}\n\n.part[_ngcontent-%COMP%] {\n  padding: 3% 0 2%;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  font-weight: 600;\n  margin-bottom: 3%;\n}\n\n.text_about[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  font-weight: 400;\n  margin-bottom: 2%;\n  padding-right: 5%;\n}\n\n.button_wrap[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.sfd[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0 !important;\n  padding-right: 0 !important;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  color: #001B4A;\n  padding-left: 1%;\n  transition: 0.5s ease;\n}\n\n.sfd[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: rgba(2, 138, 190, 0.6980392157);\n  transform: translateX(50%);\n  transition: 0.5s;\n}\n\n.sfd[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: rgba(2, 138, 190, 0.6980392157);\n  transition: 0.3s;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 980px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n}\n@media (max-width: 768px) {\n  .text_about[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .text[_ngcontent-%COMP%] {\n    margin-bottom: 2%;\n  }\n  .arrow[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n}\n@media (max-width: 576px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n  .text_about[_ngcontent-%COMP%] {\n    padding-right: 5%;\n  }\n  .arrow[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29sdXRpb25zUGFnZS9zb2x1dGlvbnMtbGlzdC9zb2x1dGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBO3FCQUFBO0FBRUE7O0FBQ0E7RUFDRTtvQkFBQTtFQUVBLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTUY7O0FBSEE7RUFDRSxzQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFIQTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFIQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFNRjtFQUpBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFNRjtBQUNGO0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBTUY7RUFKQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBTUY7QUFDRjtBQUpBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFNRjtFQUpBO0lBQ0UsaUJBQUE7RUFNRjtFQUpBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFNRjtBQUNGO0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU1GO0VBSkE7SUFDRSxpQkFBQTtFQU1GO0VBSkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQU1GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4vKiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjkwcHgqLztcclxufVxyXG4uc29sdXRpb25zX3dyYXB7XHJcbiAgLyptYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDsqL1xyXG4gIHBhZGRpbmc6IDAgNiU7XHJcbn1cclxuLnBhcnR7XHJcbiAgcGFkZGluZzogMyUgMCAyJTtcclxufVxyXG4udGV4dCB7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG4udGV4dF9hYm91dCB7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLmJ1dHRvbl93cmFwe1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZmQgc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFycm93e1xyXG4gIGNvbG9yOiAjMDAxQjRBO1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG59XHJcblxyXG4uc2ZkOmhvdmVyIHN2ZyB7XHJcbiAgY29sb3I6ICMwMjhBQkVCMjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uc2ZkOmhvdmVyIHNwYW4ge1xyXG4gIGNvbG9yOiAjMDI4QUJFQjI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAudGV4dF9hYm91dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG4gIC50ZXh0X2Fib3V0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRleHRfYWJvdXR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbiAgLmFycm93e1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC50ZXh0X2Fib3V0e1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgfVxyXG4gIC5hcnJvd3tcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7211:
/*!****************************************************************************!*\
  !*** ./src/app/solutionsPage/solutions-title/solutions-title.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionsTitleComponent": () => (/* binding */ SolutionsTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SolutionsTitleComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function SolutionsTitleComponent_Factory(t) {
      return new (t || SolutionsTitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolutionsTitleComponent,
      selectors: [["app-solutions-title"]],
      decls: 14,
      vars: 0,
      consts: [[1, "solutions_title"], [1, "solutions_wrap"], [1, "part"], [1, "solutions"], [1, "text"], [1, "textabout"], [1, "solutions_text"], ["src", "../../../assets/img/VideoKonsolidatia.mp4 ", "data-oggsrc", "", "poster", "../../../assets/compressedImg/VideoKonsolidatia_Moment-min.jpg", "autoplay", "", "muted", "", "loop", "", "playsinline", "", 1, ""], ["src", "./assets/img/VideoKonsolidatia.mp4", "type", "video/mp4"], ["src", "", "type", "video/ogg"]],
      template: function SolutionsTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 ProQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F ETL \u2013 \u0441\u0438\u0441\u0442\u0435\u043C\u0430, \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u0430\u044F \u0441 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 qMS, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u043D\u0441\u043E\u043B\u0438\u0434\u0430\u0446\u0438\u0438, \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C, \u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432. \u0414\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0442\u0435\u043C\u043F\u0430\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445, \u043D\u0430\u0443\u0447\u043D\u044B\u0445 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447. \u0418\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043C \u0418\u0410\u041F ProQ \u0441 \u041C\u0418\u0421, \u0443\u0447\u0451\u0442\u043D\u044B\u043C\u0438 \u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438, c CRM, \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043E\u0431\u043E\u0440\u043E\u0442\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u043C\u0438 ERP-\u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "video", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 8)(12, "source", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435,\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 \u0432\u0438\u0434\u0435\u043E. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: [".solutions_title[_ngcontent-%COMP%] {\n  \n  background: rgba(214, 231, 238, 0.26);\n}\n\n.solutions_wrap[_ngcontent-%COMP%] {\n  \n  padding: 0 6%;\n}\n\n.solutions[_ngcontent-%COMP%] {\n  padding: 3% 0 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  font-size: 38px;\n  line-height: 40px;\n  letter-spacing: 0.03em;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.textabout[_ngcontent-%COMP%] {\n  padding: 2% 0 4%;\n}\n\n.solutions_text[_ngcontent-%COMP%] {\n  color: #001B4A;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1280px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 36px;\n    letter-spacing: 0.03em;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 21px;\n  }\n}\n@media (max-width: 980px) {\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.01em;\n  }\n}\n@media (max-width: 768px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 29px;\n    line-height: 31px;\n    letter-spacing: 0.02em;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 580px) {\n  .text[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 28px;\n    letter-spacing: 0;\n  }\n  .solutions_text[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 13px;\n  }\n}\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29sdXRpb25zUGFnZS9zb2x1dGlvbnMtdGl0bGUvc29sdXRpb25zLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7b0JBQUE7RUFFQSxxQ0FBQTtBQUNGOztBQUNBO0VBQ0U7b0JBQUE7RUFFQSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBTUY7O0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBT0Y7RUFMQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU9GO0FBQ0Y7QUFMQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUFPRjtBQUNGO0FBTEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VBT0Y7RUFMQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQU9GO0FBQ0Y7QUFMQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFPRjtFQUxBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBT0Y7QUFDRjtBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU1GIiwic291cmNlc0NvbnRlbnQiOlsiLnNvbHV0aW9uc190aXRsZXtcclxuICAvKm1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDI5MHB4OyovXHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIzMSwgMjM4LCAwLjI2KTtcclxufVxyXG4uc29sdXRpb25zX3dyYXB7XHJcbiAgLyptYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyOTBweDsqL1xyXG4gIHBhZGRpbmc6IDAgNiU7XHJcbn1cclxuLnNvbHV0aW9uc3tcclxuICBwYWRkaW5nOiAzJSAwIDA7XHJcbn1cclxuLnRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZXh0YWJvdXR7XHJcbiAgcGFkZGluZzogMiUgMCA0JTtcclxufVxyXG4uc29sdXRpb25zX3RleHR7XHJcbiAgY29sb3I6ICMwMDFCNEE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgfVxyXG4gIC5zb2x1dGlvbnNfdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuc29sdXRpb25zX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAuc29sdXRpb25zX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICAuc29sdXRpb25zX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG4vL1xyXG4vLy52aWRlby1jb250YWluZXIge1xyXG4vLyAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vL31cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2511:
/*!**********************************************************!*\
  !*** ./src/app/solutionsPage/solutionsPage.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionsPageComponent": () => (/* binding */ SolutionsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homePage/footer/footer.component */ 5675);
/* harmony import */ var _solutions_title_solutions_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solutions-title/solutions-title.component */ 7211);
/* harmony import */ var _solutions_list_solutions_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solutions-list/solutions-list.component */ 9881);
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description/description.component */ 211);
/* harmony import */ var _solution_opportunities_solution_opportunities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solution-opportunities/solution-opportunities.component */ 8022);







class SolutionsPageComponent {
  constructor(titleService) {
    this.titleService = titleService;
  }
  ngOnInit() {
    this.titleService.setTitle('Информационно-аналитическая платформа ProQ');
  }
  static {
    this.ɵfac = function SolutionsPageComponent_Factory(t) {
      return new (t || SolutionsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SolutionsPageComponent,
      selectors: [["app-solutionspage"]],
      decls: 6,
      vars: 0,
      consts: [[1, "solutionsPage"]],
      template: function SolutionsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-solutions-title")(2, "app-description")(3, "app-solution-opportunities")(4, "app-solutions-list")(5, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_homePage_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _solutions_title_solutions_title_component__WEBPACK_IMPORTED_MODULE_1__.SolutionsTitleComponent, _solutions_list_solutions_list_component__WEBPACK_IMPORTED_MODULE_2__.SolutionsListComponent, _description_description_component__WEBPACK_IMPORTED_MODULE_3__.DescriptionComponent, _solution_opportunities_solution_opportunities_component__WEBPACK_IMPORTED_MODULE_4__.SolutionOpportunitiesComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 776:
/*!*******************************************!*\
  !*** ./src/app/website/website.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsiteModule": () => (/* binding */ WebsiteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




class WebsiteModule {
  static {
    this.ɵfac = function WebsiteModule_Factory(t) {
      return new (t || WebsiteModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WebsiteModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        pathMatch: 'full',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 5232)).then(module => module.HomeModule)
      }, {
        path: 'companyPage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_company_company_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./company/company.module */ 1363)).then(module => module.CompanyModule)
      }, {
        path: 'projectsPage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_projects_projects_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./projects/projects.module */ 419)).then(module => module.ProjectsModule)
      }, {
        path: 'projectsPage/projects',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_projects_project1_project1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./projects/project1/project1.module */ 8266)).then(module => module.Project1Module)
      }, {
        path: 'solutionsPage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_iap_iap_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./iap/iap.module */ 1046)).then(module => module.IAPModule)
      }, {
        path: 'servicesPage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_services_services_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./services/services.module */ 7430)).then(module => module.ServicesModule)
      }, {
        path: 'footer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_footer_footer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./footer/footer.module */ 543)).then(module => module.FooterModule)
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebsiteModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map