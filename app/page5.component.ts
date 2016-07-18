import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import  {Page5ChildComponent} from "./page5child.component"
@Component({
    selector : 'page',
    template : `
    <h1>Component Child</h1>
    this is the root app component <br>
    <child></child>
    <br><br><br>
  
    `,
    directives : [Page5ChildComponent,ROUTER_DIRECTIVES]
})
export class Page5Component{
    
}