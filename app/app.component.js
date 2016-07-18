"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "angular 2 practices";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n             \n              \n               <a [routerLink]=\"['/page2']\">Page 2</a>\n               <a [routerLink]=\"['/page3']\">Page 3</a>\n               <a [routerLink]=\"['/page4']\">Page 4</a>\n               <a [routerLink]=\"['/page5']\">Page 5</a>\n               <a [routerLink]=\"['/page6']\">Page 6</a>\n               <a [routerLink]=\"['/page7']\">Page 7</a>\n               <a [routerLink]=\"['/page8']\">Page 8</a>\n               <a [routerLink]=\"['/page9']\">Page 9</a>\n               <a [routerLink]=\"['/page10']\">Page 10</a>\n               <a [routerLink]=\"['/page10_b']\">Page 10(b)</a>\n               <a [routerLink]=\"['/page11']\">Page 11</a>\n               \n              \n              <router-outlet></router-outlet>\n              ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map