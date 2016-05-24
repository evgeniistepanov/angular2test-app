import { Component }       from '@angular/core';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {MainComponent} from './main.component'
import {TodoComponent} from './todo.component'
import {FormsComponent} from './forms.component'
import {UsersComponent} from './users/users.component'
import {DirectivesComponent} from './directives/directives.component'

@Component({
    selector: 'test-app',
    template: `<div class="container">
                <div class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                <div class="navbar-collapse collapse" id="navbar-main">
                <ul class="nav navbar-nav">
                <li><a [routerLink]="['Main']"><span>Main</span></a></li>
                <li><a [routerLink]="['Todo']"><span>ToDo</span></a></li>
                <li><a [routerLink]="['Forms', 'MainForm']">Forms</a></li>
                <li><a [routerLink]="['Users', 'MainUsers']">Users</a></li>
                <li><a [routerLink]="['Directives']">Directives</a></li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <div class="container content">
                <div class="row">
                </div>
                <router-outlet></router-outlet>
                </div>
               `,

    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/main',
        name: 'Main',
        component: MainComponent,
        useAsDefault: true
    },
    {
        path: '/todo',
        name: 'Todo',
        component: TodoComponent,
    },
    {
        path: '/forms/...',
        name: 'Forms',
        component: FormsComponent,
    },
    {
        path: '/users/...',
        name: 'Users',
        component: UsersComponent,
    },
    {
        path: '/directives',
        name: 'Directives',
        component: DirectivesComponent,
    },

])

export class AppComponent {
    title = 'Test application';
}