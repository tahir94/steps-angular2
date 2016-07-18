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
var Page11ChildComponent = (function () {
    function Page11ChildComponent() {
        this.clicked = new core_1.EventEmitter();
    }
    Page11ChildComponent.prototype.callAlert = function (event) {
        console.log("asd");
        this.clicked.emit(event);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Page11ChildComponent.prototype, "clicked", void 0);
    Page11ChildComponent = __decorate([
        core_1.Component({
            selector: 'child',
            template: "<div>this is child of its parent </div><br>\n    <button (click)=\"callAlert($event)\">click</button>    \n \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], Page11ChildComponent);
    return Page11ChildComponent;
}());
exports.Page11ChildComponent = Page11ChildComponent;
//# sourceMappingURL=page11child.component.js.map