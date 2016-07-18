import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {page9ChildComponent} from "./page9child.component"

@Component({
    selector : "page9",
    template : `
    <h1>Component Host</h1>
    <div>this is the root app component</div>
    <child data = "'this is the parent data'"></child><br>

   

    `,
    directives : [page9ChildComponent,ROUTER_DIRECTIVES]
})
export class Page9Component {}