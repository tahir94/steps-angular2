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
var page10pair_1 = require("./page10pair");
var page10pair_component_1 = require("./page10pair.component");
var Page10PartBComponent = (function () {
    function Page10PartBComponent() {
        this.pairs = [
            new page10pair_1.Pair("Afridi", 10),
            new page10pair_1.Pair("Misbah", 99),
            new page10pair_1.Pair("Younus", 110)
        ];
    }
    Page10PartBComponent = __decorate([
        core_1.Component({
            selector: 'page10(b)',
            template: "\n    <h1>(b) Component List</h1>\n    <div>this is the Parent Component</div>\n    \n    <pair *ngFor=\"let myPair of pairs\" [nameValue]=\"myPair\"></pair><br>\n\n    \n       ",
            directives: [page10pair_component_1.PairComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Page10PartBComponent);
    return Page10PartBComponent;
}());
exports.Page10PartBComponent = Page10PartBComponent;
//# sourceMappingURL=page10(b).component.js.map