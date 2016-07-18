import {Component,EventEmitter,Output} from "@angular/core";

@Component({
    selector : 'child',
    template : `<div>this is child of its parent </div><br>
    <button (click)="callAlert($event)">click</button>    
 
    `,
//   outputs : ['clicked']

})
export class Page11ChildComponent {

@Output() clicked = new EventEmitter()

constructor(){

}

callAlert(event){
    console.log("asd")
    this.clicked.emit(event)
}
}