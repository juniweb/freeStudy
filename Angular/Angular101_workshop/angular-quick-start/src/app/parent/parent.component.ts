import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() parentAge;
  @Output() parentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  parentNext() {
    this.parentEvent.emit();
  }

}
