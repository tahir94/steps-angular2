import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ChildOneComponent} from "./page6ChildOne.component";
import {ChildTwoComponent} from "./page6ChildTwo.component";

@Component({
    selector : "page6",
    template : `
         <h1>Component Tree</h1> <br>
         <div>this is the parent component</div> <br>
         <child-one></child-one> 
         <child-two></child-two>
         
    `,
    directives : [ChildOneComponent, ChildTwoComponent,ROUTER_DIRECTIVES]
})
export class Page6Component { 


}