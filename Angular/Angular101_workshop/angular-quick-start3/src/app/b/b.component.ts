import { Component, OnInit } from '@angular/core';
import { OneService } from '../one.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private one: OneService) {
    console.log(one.name + ' B');
  }

  ngOnInit() {
  }

  click() {
    this.one.name = 'BBBB';
  }

}
