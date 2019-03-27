import { Component } from '@angular/core';
import { ServiceDemoService } from './service-demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeDetails';


  //(property binding
  allowNewServer=false;

  constructor1(){
    setTimeout(2000);
  }
//property binding))
  name:string;
  print:string;
  constructor(private obj : ServiceDemoService){

  }
  
ngOnInit():string{
 return this.name=this.obj.getData();

}
}