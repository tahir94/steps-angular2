import {Component} from "@angular/core";
import {Pair} from "./page10pair";

@Component({
    selector : "pair",
    template : `
    
    {{nameValue.name}}
    {{nameValue.value}}<br>
     
    `,
    inputs : ['nameValue']
})
export class PairComponent {
  Value : Pair;

constructor(){

}

}