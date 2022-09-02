import { Component, OnInit } from '@angular/core';
import { product } from '../product.model';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  items: { product: product; quantity: number }[] = [];
  total: number = 0;
  empty: boolean;
  userName;

  constructor(
    private shoppingcartservice: ShoppingcartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getcartproducts();
    this.emptycart();
    this.gettotalprice();
  }
  getcartproducts() {
    if ('cart' in localStorage) {
      this.items = JSON.parse(localStorage.getItem('cart'));
    }
  }
  gettotalprice() {
    this.total = 0;
    if (this.items && this.items.length > 0) {
      for (let x in this.items) {
        if (
          this.items[x] &&
          this.items[x].product &&
          this.items[x].product.price &&
          this.items[x].quantity
        ) {
          this.total += this.items[x].product.price * this.items[x].quantity;
        }
      }
    }
  }

  updateamount(index: number) {
    if (this.items[index].quantity == 0) {
      this.items.splice(index, 1);
      alert('Removed from Cart!');
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.gettotalprice();
    this.emptycart();
  }

  emptycart() {
    if (this.items.length > 0) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  }

  onsubmit(data) {
    this.router.navigate(['cart', data, this.total]);
  }

  onNameChange($data) {
    if ($data) {
      this.userName = "Mr/Mrs : " +$data.value;
    }
  }
}
