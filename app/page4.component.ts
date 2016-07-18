import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
    selector : "page4",
    template : `<h1>Binding Properties</h1>
                <input [value] = "'hello ' + name"> <br><br><br>
                

    `,
    directives : [ROUTER_DIRECTIVES]
})
export class Page4Component{
name : string;
constructor(){
    this.name = "tahir";
}

}