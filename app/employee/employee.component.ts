import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

 EmployeeTable=[
   {'EmployeeName':'ramya','Gender':'female','Department':'HR'},
   {'EmployeeName':'sam','Gender':'male','Department':'IT'},
   {'EmployeeName':'vick','Gender':'male','Department':'CSE'}
 
 ];


 selectedEmployee:string='Total';
 onESelected(selectionEmployeeRadioButton:string):void{
 this.selectedEmployee=selectionEmployeeRadioButton;
 }

 
getTotalEmployee():number{
  return this.EmployeeTable.length;
}

getMale():number{
  return this.EmployeeTable.filter(e=>e.Gender==="male").length;
}

getFemale():number{
  return this.EmployeeTable.filter(e=>e.Gender==="female").length;
}



//String interpolation
serverId=10;
serverStatus='offline'; 


//Property binding
allowNewServer=false;




}