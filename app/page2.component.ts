import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router"
@Component({
  selector: 'page2',
  template: `<h1>Arrays</h1>
           <ul>
             <li *ngFor="let name of names">
               hello {{name}}
             </li>
           </ul>
           
  
  `,
  directives : [ROUTER_DIRECTIVES]
})
export class Page2Component {
names : string[]
  constructor(){
    this.names = ["Tahir","Bilal","Muzammil","Aamir"]
  }
 }