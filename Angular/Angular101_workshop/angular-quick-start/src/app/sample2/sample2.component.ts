import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {
  name = 'huimori';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.name = 'juniweb';
    }, 2000);
  }

  click(e) {
    this.name = 'button click...';
    console.log(e);
  }

}
