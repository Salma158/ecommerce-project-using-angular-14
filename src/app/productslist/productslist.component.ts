import { Component, OnInit } from '@angular/core';
import { product } from '../product.model';
import { productservice } from '../services/products.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css'],
})
export class ProductslistComponent implements OnInit {
  products: product[];

  constructor(
    private productsservice: productservice,
    private shoppingcartservice: ShoppingcartService
  ) {}

  ngOnInit() {
    this.productsservice.getproducts().subscribe((res) => {
      if (res) {
        this.products = res;
      }
    });
  }

  addtocart(productdata: { product: product; quantity: number }) {
    if (productdata) {
      this.shoppingcartservice.addtocart(productdata);
    }
  }
}
