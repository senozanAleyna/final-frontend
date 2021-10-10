import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product'; //interface implemente edildi
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  products:Product[]= [];
  dataLoaded=false; //senkron olmasını sağlar
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { } //servisi kullanır

  ngOnInit(): void { //ilk çalışan kod 
    //burada ne çağıralıcağına karar verilecektir
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  //observeable subscribe olunabilen data demektir
  getProducts(){ 
    
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
    
  }

  getProductsByCategory(categoryId:number){ 
    
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
    
  }

}
