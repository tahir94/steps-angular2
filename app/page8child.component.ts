import {Component} from "@angular/core";

@Component({
selector : "child",
template : `
      <div> this is the child component with input : {{data}} </div>

`,
inputs : ['data']
})
export class Page8Child {
data : string;
 constructor(){
     this.data = "1000"
 }

 }