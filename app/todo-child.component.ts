import { Component, EventEmitter, Output, Input, OnDestroy }       from '@angular/core';
//import {TodoComponent} from './todo.component';

@Component({
    selector: 'todo-child',
    template: `<h3 (click)="emitEvent()">{{title}}</h3>
                <div><span (click)="changeValue()" style="color:darkolivegreen;">{{childTitle}}</span></div>
               `,
})

export class TodoChildComponent implements OnDestroy{
    title = 'Todo child Component';
    @Input() childTitle : string;
    @Output() onClicked = new EventEmitter<boolean>();

    emitEvent() {
        console.log('emitEvent');
        //this.onClicked.emit(this.title);
        this.onClicked.emit(true);
    }

    changeValue() {
        this.childTitle = ' ';
    }

    ngOnDestroy() {
        console.log(arguments);
    }
}