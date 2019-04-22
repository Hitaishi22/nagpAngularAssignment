import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnBoardingFormComponent } from './on-boarding-form/on-boarding-form.component';
import { LoginComponent } from './login/login.component';

var routes = [
    { path: 'onBoardingForm', component: OnBoardingFormComponent },
    { path: 'login', component: LoginComponent },
    // { path: '',  component: LoginComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map