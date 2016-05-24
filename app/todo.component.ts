import { Component, ViewChild }       from '@angular/core';
import {Todo} from "./todo-obj.component";
import {TodoChildComponent} from "./todo-child.component";

@Component({
    selector: 'todo',
    template: `<h2>{{title}}</h2>
                
               <div>
               <ul class="special-list">
               <li *ngFor="let todo of todos">
               <span style="">ID: {{todo.id}};</span>
               <span style="">Name: {{todo.name}} </span><button class="btn btn-primary btn-xs delete-btn" (click)="deleteTodo(todo)">Delete Todo</button><br>
               </li>
               </ul>
               <div class="form-group">
                        <input [(ngModel)]="inputValue" type="text" class="form-control todo-input" placeholder="Todo name">
                        <button [disabled]="checkAddTodoButton()" class="btn btn-default" (click)="addTodo()">Add Todo</button>
                      </div>
               </div>
               <div><span (click)="changeValue()" style="color:darkolivegreen;">{{childTitle}}</span></div>
               <todo-child [(childTitle)]="childTitle" (onClicked)="onClicked($event)"></todo-child>
               `,
    directives: [TodoChildComponent]
})

export class TodoComponent {
    childTitle = 'Child Component';
    title = 'Todo Component';
    todos : Todo[] = [];
    inputValue : string = '';
    id: number = 0;

    //@ViewChild(TodoChildComponent) childcmp:TodoChildComponent;
    @ViewChild(TodoChildComponent) childcmp;

    addTodo() {
        let obj = new Todo(this.id, this.inputValue);
        this.id++;
        this.todos.push(obj);
        this.inputValue = '';
    }

    deleteTodo(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo),1);
    }

    checkAddTodoButton() {
/*        if (this.inputValue === '') {
            return true;
        } else {
            return false;
        }*/
        return (this.inputValue === '') ? true : false
    }

    onClicked(title) {
        console.log(['clicked', title]);
    }

    changeValue() {
        this.childTitle = ' ';
    }
}