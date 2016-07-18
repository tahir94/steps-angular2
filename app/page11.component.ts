import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Page11ChildComponent} from "./page11child.component";
@Component({
    selector : 'page11',
    template : `
    <h1>Component Reusable</h1>
    <div>this is the root app component</div>

    <child (clicked)="clickPressed($event)"></child>
    
    `,
    directives : [Page11ChildComponent]
})
export class Page11Component{

constructor(){

}


clickPressed(){
    alert("alerting !!!! ")
}

}