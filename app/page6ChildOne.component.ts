import {Component} from "@angular/core";
import {Page6SubChild} from "./page6ChildOneSub.component";

@Component({
    selector : "child-one",
    template : `
   <div> this is the first child Component </div> <br>
    <sub-child></sub-child>
    `,
    directives: [Page6SubChild]
})
export class ChildOneComponent{

}