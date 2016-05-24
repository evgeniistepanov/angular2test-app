import { Component, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {UsersService} from './users.service';
//import {TestPipe} from '/pipes/test.pipe'

import {TestPipe} from '../pipes/test.pipe';

@Component({
    selector: 'user-detail',
    template: `<h2>{{title}}</h2>
               <ul>
               <li *ngFor="let u of user">{{u.key | testPipe}} : {{u.value}}</li>
               <!--<li *ngFor="let u of user">{{u.key}} : {{u.value}}</li>-->
               </ul>`,
    pipes: [TestPipe]
})

export class UserDetailComponent {
    title : string = 'User Detail';
    user = [];
    error : string = '';
    constructor(private _routeParams: RouteParams, private _usersService: UsersService) {

    }

    ngOnInit() {
        if (this._routeParams.get('login') !== null) {
            let login = this._routeParams.get('login');
            this._usersService.getUser(login)
                .subscribe(
                userdata => this.user = userdata,
                error =>  this.error = <any>error);
        }
    }
}