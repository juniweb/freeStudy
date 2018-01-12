import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(
    @Inject('apiUrl') private apiUrl,
    @Inject('factory') private factoryService
  ) {
    console.log(this.apiUrl);
   }

  ngOnInit() {
  }

}
