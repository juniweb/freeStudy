import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LogService } from './log.service';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { FactoryService } from './factory.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogService,
    {
      provide: 'log',
      useExisting: LogService
    },
    {
      provide: 'apiUrl',
      useValue: 'https://ai,github.com/users'
    },
    {
      provide: 'factory',
      useFactory: (logService) => {
        return new FactoryService(logService, false);
      },
      deps: [
        LogService
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
