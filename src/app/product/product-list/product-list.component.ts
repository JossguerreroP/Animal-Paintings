import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
products: Product[]=[];

  ngOnInit(): void {
    this.prodctService.getProducts().subscribe(data => {
      this.products =data;
      console.log(data)
    })
  }

  addToCart(product: Product):void{
    this.cartService.addToCart(product).subscribe();
  }



  constructor(private prodctService: ProductService , 
              private cartService: CartService){

  }

}
