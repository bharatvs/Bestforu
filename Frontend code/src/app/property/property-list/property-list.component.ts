import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<any>=[
    {ID:1,Name:"Bvs House",Type:"House",Price:"12,34,983"},
    {ID:1,Name:"Bvs Duplex",Type:"Duplex",Price:"12,34,983"},
    {ID:1,Name:"Bvs Flat",Type:"Flat",Price:"12,34,983"},
    {ID:1,Name:"Bvs Site",Type:"Site",Price:"12,34,983"},
    {ID:1,Name:"land of gowds",Type:"Forming Land",Price:"12,34,983"},
    {ID:1,Name:"Hr House",Type:"Villa",Price:"12,34,983"},
    {ID:1,Name:"Dream house",Type:"Villa",Price:"12,34,983"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
