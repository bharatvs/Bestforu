import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProperty } from '../property.interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HousingserviceService {

  constructor(private http:HttpClient) { }

  getAllproperties(SellRent:number):Observable<IProperty[]>{
     return this.http.get<IProperty[]>("assets/properties.json").pipe(
       map(data=>
        {
          const properties:IProperty[]=[];
          for(const id in data)
          {
            if(data.hasOwnProperty(id) && data[id].SaleRent===SellRent)
            {
              properties.push(data[id]);
            }
          }
          return properties;
        })
     );
  }
}
