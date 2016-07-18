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
var page11child_component_1 = require("./page11child.component");
var Page11Component = (function () {
    function Page11Component() {
    }
    Page11Component.prototype.clickPressed = function () {
        alert("alerting !!!! ");
    };
    Page11Component = __decorate([
        core_1.Component({
            selector: 'page11',
            template: "\n    <h1>Component Reusable</h1>\n    <div>this is the root app component</div>\n\n    <child (clicked)=\"clickPressed($event)\"></child>\n    \n    ",
            directives: [page11child_component_1.Page11ChildComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Page11Component);
    return Page11Component;
}());
exports.Page11Component = Page11Component;
//# sourceMappingURL=page11.component.js.map