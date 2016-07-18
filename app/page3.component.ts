import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router"

@Component({
  selector: 'page3',
  template: `
             <h1>Events</h1> 
             <div>
               {{counter}}
             </div>
            <button (click)="addCounter()">Add</button> <br><br><br>
            
`,
directives : [ROUTER_DIRECTIVES]
})
export class Page3Component {
counter : number;

constructor(){
this.counter = 0;
}

addCounter() : void{
  this.counter++
}
 }