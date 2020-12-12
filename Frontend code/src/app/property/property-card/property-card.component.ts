import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input()
  propertycard:any;
  constructor(private activeroute:ActivatedRoute) { }
  ngOnInit(): void {
    
  }
  
}
