

import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  dataLoaded = false;
  emptyBrand : Brand;


  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  setCurrentBrand(brand: Brand) {
    
    
    this.currentBrand = brand;


    

  }
  getCurrentBrand(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active";
    }else{
      return 'list-group-item ';
    }
  }
  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active"
      
    } else {
      return "list-group-item"
    }
    
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;


    });
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    }else{
      return 'list-group-item ';
    }
  }

  clearCurrentBrand(){
    this.currentBrand = this.emptyBrand;
    this
  }
}

