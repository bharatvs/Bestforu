import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private router:Router) { }

  propertyId!: number;

  

  ngOnInit(): void {
    this.propertyId= this.activeroute.snapshot.params['id'];
    this.activeroute.params.subscribe(params=>this.propertyId= +params['id']);
  }
 
  onBack(){
    this.router.navigate(['/home']);
  }

  onNext(){
    this.propertyId +=1;
    this.router.navigate(['/property-details',this.propertyId]);
  }
}
