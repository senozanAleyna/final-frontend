import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' //vasıtası ile backend isteğinde bulunulur
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({ //servis anotasyonu. Product service'i enjekte eder
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44361/api/";

  constructor(private httpClient:HttpClient) { }

  //bir servisten api isteğinde bulunma çalışması
  //subscribe olunabilir bir response model döner
  getProducts():Observable<ListResponseModel<Product>>{ 
    let newPath= this.apiUrl + "products/getall" //yeni bir değişken tanımlaması
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
    }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{ 
    let newPath=this.apiUrl + "products/getbycategory?categoryId=" +categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
    }
    
}
