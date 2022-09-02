import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  user: { name: string; price: number };

  constructor(
    private shoppingcartservice: ShoppingcartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['name'],
      price: this.route.snapshot.params['price'],
    };
    localStorage.clear();
  }

  back() {
    this.router.navigate(['']);
  }
}
