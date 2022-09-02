import { Injectable } from '@angular/core';
import { product } from '../product.model';

@Injectable()
export class ShoppingcartService {
  constructor() {}

  cartitems: { product: product; quantity: number }[] = [];

  addtocart(productdata) {
    if (productdata && productdata.product) {
      if ('cart' in localStorage) {
        this.cartitems = JSON.parse(localStorage.getItem('cart'));
        let exist = this.cartitems.find((cartitem) => {
          if (cartitem && cartitem.product) {
            return cartitem.product.id == productdata.product.id;
          }
        });
        if (exist) {
          exist.quantity =
            Number(exist.quantity) + Number(productdata.quantity);
          localStorage.setItem('cart', JSON.stringify(this.cartitems));
          alert('Added to Cart');
        } else {
          this.cartitems.push(productdata);
          localStorage.setItem('cart', JSON.stringify(this.cartitems));
          alert('Added to Cart');
        }
      } else {
        this.cartitems.push(productdata);
        localStorage.setItem('cart', JSON.stringify(this.cartitems));
        alert('Added to Cart');
      }
    }
  }
}
