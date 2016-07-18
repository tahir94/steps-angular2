import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

class Places {
name  : string;
value : string;

    constructor(name: string , value : string){
         this.name = name ; 
         this.value = value;
    }
}



@Component({
    selector : 'page10',
    template : `
    <h1>(a) Component List</h1>
   <div> this is the Main Component</div>

   <span>{{place[0].name}}</span>
   <span>{{place[0].value}}</span><br>

   <span>{{place[1].name}}</span>
   <span>{{place[1].value}}</span><br>

   <span>{{place[2].name}}</span>
   <span>{{place[2].value}}</span><br>  




    `,
    directives : [ROUTER_DIRECTIVES]
})
export class Page10Component{
place : Places[]

constructor(){
    this.place = [
        new Places ("hello ", "World"),
        new Places ("hello ", "Pakistan"),
        new Places ("hello ", "Karachi")
    ]
}

}