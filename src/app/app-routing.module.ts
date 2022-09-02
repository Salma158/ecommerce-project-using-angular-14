import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: ProductslistComponent },
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: 'cart', component: ShopComponent },
  { path: 'cart/:name/:price', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
