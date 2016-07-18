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
var page8child_component_1 = require("./page8child.component");
var Page8Component = (function () {
    function Page8Component() {
        var _this = this;
        this.counter = 10;
        setInterval(function () {
            _this.counter++;
        }, 2000);
    }
    Page8Component = __decorate([
        core_1.Component({
            selector: "page8",
            template: "\n       <h1>Component Child Dynamic Input</h1>\n       <h2>part 1</h2>\n       <div>this is the root app Component</div>\n       <child [data]=\"counter\"></child>\n       \n       <h2>part 2</h2>\n       <div>this is the root app component</div>\n       <child [data] ></child><br>\n\n    \n     \n    \n    ",
            directives: [page8child_component_1.Page8Child, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Page8Component);
    return Page8Component;
}());
exports.Page8Component = Page8Component;
//# sourceMappingURL=page8.component.js.map