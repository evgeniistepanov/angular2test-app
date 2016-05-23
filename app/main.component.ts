import { Component }       from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {TodoComponent} from './todo.component'

@Component({
    selector: 'test-app',
    template: `<h1>{{title}}</h1>
               `,

})

export class MainComponent {
    title = 'Test application MAIN';
}