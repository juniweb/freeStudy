import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {

  grandAge = 35;

  constructor() { }

  ngOnInit() {
  }

  grandNext() {
    this.grandAge = this.grandAge + 1;
  }

}
