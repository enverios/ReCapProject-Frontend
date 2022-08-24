import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import{Observable}from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';

@Injectable({
  providedIn: 'root'
})export class CarService {
  apiUrl = 'https://localhost:44353/api/'

  constructor(private httpClient:HttpClient) { }

  
  getCars(): Observable<ListResponseModel<CarDetailDto>>{
    let newPath= this.apiUrl +"Cars/getdetails"
   return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl +"Cars/getdetailsbrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
   }

   getCarsByColor(colorId:number) : Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl +"Cars/getdetailscolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
   }
   
   getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + 'Cars/GetCarsBycarId?carId=' + carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

}