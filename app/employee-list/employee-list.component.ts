import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  
 selectedEmployee:string='Total'
 @Output()
OnSelectionOfRadioButton: EventEmitter<String>=new EventEmitter<string>();

OnSelectionRadioButton(){
  this.OnSelectionOfRadioButton.emit(this.selectedEmployee);
}

  @Input()
  Total:number;

  @Input()
  Male:number;

  @Input()
  Female:number;


  
}
