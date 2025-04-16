"use strict";
(self["webpackChunkProQ"] = self["webpackChunkProQ"] || []).push([["src_app_website_projects_projects_module_ts"],{

/***/ 419:
/*!*****************************************************!*\
  !*** ./src/app/website/projects/projects.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsModule": () => (/* binding */ ProjectsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _projectsPage_projectsPage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projectsPage/projectsPage.component */ 3958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class ProjectsModule {
  static {
    this.ɵfac = function ProjectsModule_Factory(t) {
      return new (t || ProjectsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProjectsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
        path: '',
        pathMatch: 'full',
        component: _projectsPage_projectsPage_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsPageComponent
      }, {
        path: 'projects',
        pathMatch: 'full',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_projects_project1_project1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project1/project1.module */ 8266)).then(module => module.Project1Module)
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_website_projects_projects_module_ts.js.map