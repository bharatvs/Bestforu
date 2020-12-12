import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProperty } from '../property.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingserviceService {

  constructor(private http:HttpClient) { }

  getAllproperties():Observable<IProperty[]>{
     return this.http.get<IProperty[]>("assets/properties.json");
  }
}
