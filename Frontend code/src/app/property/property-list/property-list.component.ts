import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/property.interface';

import { HousingserviceService } from 'src/app/services/housingservice.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:IProperty[] | undefined;
  constructor(private housingservice:HousingserviceService) { }

  ngOnInit(): void {
    this.housingservice.getAllproperties().subscribe((data)=>this.properties=data,error=>{console.log(error)
     } );
  }

}
