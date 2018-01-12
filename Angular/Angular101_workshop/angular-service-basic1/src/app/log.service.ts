import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class LogService {

  count = 0;

  constructor() { }

  public info(message: string): void {
    console.log('info:', message, this.count);
    this.count++;
  }

}
