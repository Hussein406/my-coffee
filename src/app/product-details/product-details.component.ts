import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  coffee?: Product; 
  coffeeDetail: Product[] = []; 



  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    // this.productService.fetchCofee().subscribe(
    //   (product) => {
    //     console.log(product)
    //   })
    this.coffeeDetail =  this.productService.productService;

    for(const key in this.coffeeDetail){
      if (id === this.coffeeDetail[key].id){
        this.coffee =  this.coffeeDetail[key]
      }
    }
      
  }
  
  getHero() {
    
    // console.log('id from url', id)
    // this.productService.fetchCofee().subscribe((coff) => {
    //   console.log(coff)
    //   // if(id === ) {
    //   //   console.log(coffee)
    //   // }
    // })
  }

  goBack() {
    this.location.back()
  }
}
