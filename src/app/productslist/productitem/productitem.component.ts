import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/product.model';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
})
export class ProductitemComponent implements OnInit {
  constructor(private shoppingcart: ShoppingcartService) {}

  ngOnInit(): void {}

  @Input() product: product;
  @Output() productadded = new EventEmitter();
  amount: number = 1;

  emitter($data) {
    if ($data) {
      this.productadded.emit({ product: $data, quantity: this.amount });
    }
  }
}
