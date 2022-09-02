import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product.model';
import { productservice } from '../services/products.service';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  selectedProduct: product;
  amount: number = 1;
  constructor(
    private activeRoute: ActivatedRoute,
    private productservice: productservice,
    private shoppingcartservice: ShoppingcartService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      if (params && params['id']) {
        this.productservice.getproducts().subscribe((data) => {
          if (data) {
            this.selectedProduct = data.find((res) => {
              if (res) {
                if (res['id'] == params['id']) {
                  return res;
                }
              }
            });
          }
        });
      }
    });
  }

  addtocart() {
    if (this.selectedProduct) {
      this.shoppingcartservice.addtocart({
        product: this.selectedProduct,
        quantity: this.amount,
      });
    }
  }
}
