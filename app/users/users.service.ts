import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'
import { Observable }     from 'rxjs/Observable';

//import { Hero } from './hero';

@Injectable()
export class UsersService {

    private usersUrl = 'https://api.github.com/users';
    private singleUserUrl = 'https://api.github.com/users/';

    constructor(private http: Http) { }

    getUsers() {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getUser(login : string) {
        return this.http.get(this.singleUserUrl + login)
            .map(this.convertObjToArray)
            .catch(this.handleError);
    }

    getUsersWithRXjs() {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res) {
        let body = res.json();
        return body || [];
    }

    private convertObjToArray(res) {
        let body = res.json();
        let objArray = [];
        for (let property in body) {
            let obj = {key: property, value: body[property]};
            objArray.push(obj);
        }
        return objArray;
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
