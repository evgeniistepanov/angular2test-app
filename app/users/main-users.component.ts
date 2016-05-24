import { Component, OnInit, OnChanges }       from '@angular/core';
import {UsersService} from './users.service';
import { Router }            from '@angular/router-deprecated';

@Component({
    selector: 'users',
        template: `
        <style>
        ul {
        width: 15em;
        }
        li:hover {
            background-color: #29A20B !important;
            color: white;
            cursor: pointer;
            margin-left: 0.5em;
        }
        </style>
        <h1 (click)="onTitleClick()">{{title}}</h1>
         <div>
         <ul>
         <li *ngFor="let user of usersData" (click)="gotoUserDetails(user)">Login: {{user.login}}</li>
         </ul>
         </div>
     `,
    providers: [UsersService],
})


export class MainUsersComponent implements OnInit, OnChanges{
    title: string = 'Users';
    usersData = [];
    error: string;
    constructor(private _userService : UsersService, private _router : Router) {

    }

    getUsers() {
        this._userService.getUsers()
            .then(response => this.usersData = response)
            .catch(error => this.error = error);
    }

    getUsersWithRXjs() {
        this._userService.getUsersWithRXjs()
            .subscribe(
                users => this.usersData = users,
                error =>  this.error = <any>error);
    }

    ngOnInit() {
        console.log(this._userService);
        //this.getUsers();
        this.getUsersWithRXjs();
    }

    onTitleClick() {
        console.log(this.usersData);
    }

    gotoUserDetails(user) {
        console.log(this._router);
        this._router.navigate(['UserDetail', { login: user.login }]);
    }

    ngOnChanges() {
        console.log(arguments);
    }
}