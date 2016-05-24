    import { Component, OnInit }       from '@angular/core';


import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {UsersService} from './users.service';

import {MainUsersComponent} from './main-users.component';
import {UserDetailComponent} from './user-detail.component';

@Component({
    selector: 'users',
/*    template: `<h1 (click)="onTitleClick()">{{title}}</h1>
                <div>
                <ul>
                <li *ngFor="let user of usersData">Login: {{user.login}}</li>
                </ul>
                </div>
                `,*/
    template: `<h1></h1>
               <router-outlet></router-outlet>`,
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES]
})


@RouteConfig([
    {
        path: '/main-users',
        name: 'MainUsers',
        component: MainUsersComponent,
        useAsDefault: true
    },
    {
        path: '/:login',
        name: 'UserDetail',
        component: UserDetailComponent
    },
])

export class UsersComponent implements OnInit{
    title: string = 'Users';
    usersData = [];
    error: string;
    constructor(private _userService : UsersService) {
        
    }

  
    ngOnInit() {
        console.log(this._userService);
        //this.getUsers();
    }

    onTitleClick() {
        console.log(this.usersData);
    }
}