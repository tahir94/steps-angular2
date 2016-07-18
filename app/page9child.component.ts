import {Component} from "@angular/core";

@Component({
    selector: 'child',
    template : `
        <div>this is the child app component with inputs : {{data}}</div>
        
    `,
    inputs : ['data'],
    host : {
        class : 'row',
        '[style.color]' : 'backgroundColor()'
    }
})
export class page9ChildComponent { 

    constructor(){

    }

    backgroundColor(){
        return "red";
    }
}