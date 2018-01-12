import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '안녕하세요. Juni';
  names = [
    '임희준',
    'juniweb',
    'huimori'
  ];

  custom() {
    console.log('custom');
  }
}
