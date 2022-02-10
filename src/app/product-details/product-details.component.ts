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
  @Input() coffee?: Product; 


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero(); 
    console.log(this.route.snapshot.params['id'])
  }
  
  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // console.log('id is ', id)
    this.productService.getCoffee(id).subscribe((coffee) => {
      // console.log('Coffee', coffee)
    })
  }
}
