import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public getUsers(): Promise<any> {
    return this.http.get('https://raw.githubusercontent.com/2woongjae/angular-demo-basic1/master/data.json')
    .toPromise();
  }

  public getUsersObservable() {
    return this.http.get('https://raw.githubusercontent.com/2woongjae/angular-demo-basic1/master/data.json');
  }
}
