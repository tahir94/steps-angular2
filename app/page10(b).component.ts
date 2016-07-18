import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Pair} from              "./page10pair";
import {PairComponent} from "./page10pair.component"

@Component({
    selector : 'page10(b)',
    template : `
    <h1>(b) Component List</h1>
    <div>this is the Parent Component</div>
    
    <pair *ngFor="let myPair of pairs" [nameValue]="myPair"></pair><br>

    
       `,
    directives : [PairComponent,ROUTER_DIRECTIVES]
})
export class Page10PartBComponent {
pairs : Pair[]

constructor(){
    this.pairs = [
        new Pair("Afridi",10),
        new Pair("Misbah",99),
        new Pair("Younus",110)
    ]
}
    
}