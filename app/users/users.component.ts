import { Component, OnInit }       from '@angular/core';
import {UsersService} from './users.service';

@Component({
    selector: 'users',
    template: `<h1 (click)="onTitleClick()">{{title}}</h1>
                <div>
                <ul>
                <li *ngFor="let user of usersData">Login: {{user.login}}</li>
                </ul>
                </div>
                `,
    providers: [UsersService]
})

export class UsersComponent implements OnInit{
    title: string = 'Users';
    usersData = [];
    error: string;
    constructor(private _userService : UsersService) {
        
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
}