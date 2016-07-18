import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'page1',
  template: `<h1>Variable Expression</h1>
             hello {{name}} <br><br><br>
              
  
  `,
    directives: [ROUTER_DIRECTIVES]
})
export class Page1Component {

  name : String;


constructor(){
  this.name = "world";
}
 }