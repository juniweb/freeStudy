import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  @Input() childName;
  @Input() childAge;
  @Input() eventName;

  @Output() childEvent = new EventEmitter();

  inputValue = '';

  events = [];

  constructor() { }

  childClick(text, event) {
    console.log(text);
    console.log(event);
    this.inputValue = text;
  }

  // 프로퍼티 초기화된 직후
  ngOnInit() {
    this.events.push('ngOnInit');

    setInterval(() => {
      console.log('Event call..');
      this.childEvent.emit();
    }, 3000);
  }

  // 최초 초기화 때 / Input 프로퍼티가 변경될 때
  ngOnChanges() {
    this.events.push('ngOnChanges');
  }

  // ngContent 사용 시 자식이 초기화 된 직후
  ngAfterContentInit() {
    this.events.push('ngAfterContentInit');
  }

  // 템플릿이 모두 초기화 되었을 때
  ngAfterViewInit() {
    this.events.push('ngAfterViewInit');
  }

  // ngContent 를 통해 HTML 을 받을 때
  ngAfterContentChecked() {
    this.events.push('ngAfterContentChecked');
  }

  // 템플릿에 바인딩된 값이 변경되었을 때
  ngAfterViewChecked() {
    this.events.push('ngAfterViewChecked');
  }

}
