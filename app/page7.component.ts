import  {Component} from "@angular/core";
import {page7Component} from "./page7child.component";
import {ROUTER_DIRECTIVES} from "@angular/router"
@Component({
    selector : "page7",
    template : `
             <h1>Component child input</h1>
             <div>
             <h2>part 1</h2>
             this is the parent component 
             </div>
             <child  data = "the parent data is being exposed"> </child>

             <div>
             <h2>part 2</h2>
             this is the parent component 
             </div>
             <child></child><br>   
             
 
    `,
    directives : [page7Component,ROUTER_DIRECTIVES]
})
export class Page7Component {

    constructor(){

        
    }
 }