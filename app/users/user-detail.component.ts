import { Component, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {UsersService} from './users.service';

@Component({
    selector: 'user-detail',
    template: `<h2>{{title}}</h2>
               <ul>
               <li *ngFor="let u of user">{{u.key}} : {{u.value}}</li>
               </ul>`
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