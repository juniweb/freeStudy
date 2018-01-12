import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [];
  isVisible = true;

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: Http
  ) {
    this.http.get(this.apiUrl)
    .toPromise()
    .then(data => {
      this.users = data.json();
    })
    .catch(error => {
      this.users = [];
      console.log(error);
    });
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
