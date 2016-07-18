import {Component} from "@angular/core";

@Component({
    selector : "child",
    template : `
                <div>
                this is the child Component and have inputs {{data}}
                </div>
    `,
    inputs : ['data']
})
export class page7Component{ 
data : string;
constructor(){
    this.data = "the child data is being exposed"
}
}