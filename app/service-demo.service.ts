import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {
  static printToConsole: any;

  printToConsole(args){
console.log(args);
  }


  constructor() { }
  
  name:string;
  getData():string{
   this.name = 'bob';
    return this.name;
  }
  }
