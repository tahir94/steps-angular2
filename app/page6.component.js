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
var page6ChildOne_component_1 = require("./page6ChildOne.component");
var page6ChildTwo_component_1 = require("./page6ChildTwo.component");
var Page6Component = (function () {
    function Page6Component() {
    }
    Page6Component = __decorate([
        core_1.Component({
            selector: "page6",
            template: "\n         <h1>Component Tree</h1> <br>\n         <div>this is the parent component</div> <br>\n         <child-one></child-one> \n         <child-two></child-two>\n         \n    ",
            directives: [page6ChildOne_component_1.ChildOneComponent, page6ChildTwo_component_1.ChildTwoComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Page6Component);
    return Page6Component;
}());
exports.Page6Component = Page6Component;
//# sourceMappingURL=page6.component.js.map