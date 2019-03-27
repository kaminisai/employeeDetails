import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MyDirectiveDirective } from './my-directive.directive';
import {FormsModule} from '@angular/forms';
import {EmployeePipe} from './employee.pipe'
import { ServiceDemoService } from './service-demo.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MyDirectiveDirective,
    EmployeePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceDemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
