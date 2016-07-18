import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             
              
               <a [routerLink]="['/page2']">Page 2</a>
               <a [routerLink]="['/page3']">Page 3</a>
               <a [routerLink]="['/page4']">Page 4</a>
               <a [routerLink]="['/page5']">Page 5</a>
               <a [routerLink]="['/page6']">Page 6</a>
               <a [routerLink]="['/page7']">Page 7</a>
               <a [routerLink]="['/page8']">Page 8</a>
               <a [routerLink]="['/page9']">Page 9</a>
               <a [routerLink]="['/page10']">Page 10</a>
               <a [routerLink]="['/page10_b']">Page 10(b)</a>
               <a [routerLink]="['/page11']">Page 11</a>
               
              
              <router-outlet></router-outlet>
              `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
  title: string;

  constructor(){
    this.title = "angular 2 practices";
  }


}