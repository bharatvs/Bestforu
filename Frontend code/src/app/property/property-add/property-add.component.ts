import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {
   @ViewChild('Form')
  addFormProperty!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(Form:NgForm){
    console.log("Congrats submitted");
    console.log(this.addFormProperty);

  }
}
