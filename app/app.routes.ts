import { provideRouter, RouterConfig }  from '@angular/router';
import {Page1Component} from './page1.component';
import {Page2Component} from './page2.component';
import {Page3Component} from './page3.component';
import {Page4Component} from './page4.component';
import {Page5Component} from "./page5.component";
import {Page6Component} from "./page6.component";
import {Page7Component} from "./page7.component";
import {Page8Component} from "./page8.component";
import {Page9Component} from "./page9.component";
import {Page10Component} from "./page10.component";
import {Page10PartBComponent} from "./page10(b).component";
import {Page11Component} from "./page11.component";
export const routes: RouterConfig = [
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
   {
    path: 'page3',
    component: Page3Component
  },
  {
    path : "page4",
    component : Page4Component  
},
{
  path : "page5",
  component : Page5Component
},
{
  path : "page6",
  component : Page6Component
},
{
  path : "page7",
  component : Page7Component
},
{
  path : "page8",
  component : Page8Component
},
{
 path : "page9",
 component : Page9Component
},
{
  path : 'page10',
  component : Page10Component
},
{
  path : 'page10_b',
  component : Page10PartBComponent
},
{
  path : 'page11',
  component : Page11Component
},

  { path: '', 
    component: Page1Component 
  },
  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];