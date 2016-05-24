import { Component }       from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {SimpleFormComponent} from "./simple-form.component";
import {MainFormComponent} from "./main-form.component";

@Component({
    selector: 'forms',
    templateUrl: 'app/forms.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/',
        name: 'MainForm',
        component: MainFormComponent,
        useAsDefault: true
    },
    {
        path: '/simple-form',
        name: 'SimpleForm',
        component: SimpleFormComponent,
    }
])

export class FormsComponent {
    title: string = 'Forms Component';
}