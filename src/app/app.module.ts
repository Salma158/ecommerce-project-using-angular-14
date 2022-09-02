import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductitemComponent } from './productslist/productitem/productitem.component';
import { productservice } from './services/products.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingcartService} from './services/shoppingcart.service';
import { ShopComponent } from './shop/shop.component'
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    ProductitemComponent,
    ProductdetailsComponent,
    HeaderComponent,
    ShopComponent,
    ConfirmationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [productservice, ShoppingcartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
