import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/property.interface';

import { HousingserviceService } from 'src/app/services/housingservice.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  properties:IProperty[] | undefined;
  constructor(private housingservice:HousingserviceService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activatedroute.snapshot.url.toString())
    {
      this.SellRent=2;
    }
    console.log(this.activatedroute.url.toString());
    this.housingservice.getAllproperties(this.SellRent).subscribe((data)=>this.properties=data,error=>{console.log(error)
     } );
  }

}
