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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page5child_component_1 = require("./page5child.component");
var Page5Component = (function () {
    function Page5Component() {
    }
    Page5Component = __decorate([
        core_1.Component({
            selector: 'page',
            template: "\n    <h1>Component Child</h1>\n    this is the root app component <br>\n    <child></child>\n    <br><br><br>\n  \n    ",
            directives: [page5child_component_1.Page5ChildComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Page5Component);
    return Page5Component;
}());
exports.Page5Component = Page5Component;
//# sourceMappingURL=page5.component.js.map