"use strict";
var router_1 = require('@angular/router');
var page1_component_1 = require('./page1.component');
var page2_component_1 = require('./page2.component');
var page3_component_1 = require('./page3.component');
var page4_component_1 = require('./page4.component');
var page5_component_1 = require("./page5.component");
var page6_component_1 = require("./page6.component");
var page7_component_1 = require("./page7.component");
var page8_component_1 = require("./page8.component");
var page9_component_1 = require("./page9.component");
var page10_component_1 = require("./page10.component");
var page10_b__component_1 = require("./page10(b).component");
var page11_component_1 = require("./page11.component");
exports.routes = [
    {
        path: 'page1',
        component: page1_component_1.Page1Component
    },
    {
        path: 'page2',
        component: page2_component_1.Page2Component
    },
    {
        path: 'page3',
        component: page3_component_1.Page3Component
    },
    {
        path: "page4",
        component: page4_component_1.Page4Component
    },
    {
        path: "page5",
        component: page5_component_1.Page5Component
    },
    {
        path: "page6",
        component: page6_component_1.Page6Component
    },
    {
        path: "page7",
        component: page7_component_1.Page7Component
    },
    {
        path: "page8",
        component: page8_component_1.Page8Component
    },
    {
        path: "page9",
        component: page9_component_1.Page9Component
    },
    {
        path: 'page10',
        component: page10_component_1.Page10Component
    },
    {
        path: 'page10_b',
        component: page10_b__component_1.Page10PartBComponent
    },
    {
        path: 'page11',
        component: page11_component_1.Page11Component
    },
    { path: '',
        component: page1_component_1.Page1Component
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map