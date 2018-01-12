import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  // snapshot
  // name = '';

  // rx
  name;

  constructor(private route: ActivatedRoute) {
    // 동기 - snapshop
    // this.name = this.route.snapshot.paramMap.get('name');

    // 비동기 - rx
    this.name = this.route.params.map(p => p.name);
  }

  ngOnInit() {
  }

}
