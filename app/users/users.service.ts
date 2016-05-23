import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'
import { Observable }     from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';

//import { Hero } from './hero';

@Injectable()
export class UsersService {

    private usersUrl = 'https://api.github.com/users';

    constructor(private http: Http) { }

/*    getUsers() {
        return this.http.get(this.usersUrl).toPromise();
    }*/

    getUsers() {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json())
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

    getUser(id: number) {
        return this.getUsers()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

/*    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }*/
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
