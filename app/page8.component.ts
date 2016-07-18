import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Page8Child} from "./page8child.component"

@Component({
    selector : "page8",
    template : `
       <h1>Component Child Dynamic Input</h1>
       <h2>part 1</h2>
       <div>this is the root app Component</div>
       <child [data]="counter"></child>
       
       <h2>part 2</h2>
       <div>this is the root app component</div>
       <child [data] ></child><br>

    
     
    
    `,
    directives : [Page8Child,ROUTER_DIRECTIVES]
})
export class Page8Component{ 
 counter : number = 10;
 constructor(){
    
    setInterval(()=>{
        this.counter++
    },2000)
 }

}