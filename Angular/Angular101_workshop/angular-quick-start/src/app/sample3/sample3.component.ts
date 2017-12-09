import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {

  @Input() test;
  @Output() downEvent = new EventEmitter();

  disabled = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.disabled = false;
      this.downEvent.emit();
    }, 2000);
  }

}
