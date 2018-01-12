import { Component, OnInit } from '@angular/core';
import { OneService } from '../one.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private one: OneService) {
    console.log(one.name + ' A');
   }

  ngOnInit() {
  }

  click() {
    this.one.name = 'AAAA';
  }

}
