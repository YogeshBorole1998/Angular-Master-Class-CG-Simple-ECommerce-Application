import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentBarComponent } from './components/content-bar/content-bar.component';
import { ProductListInfoComponent } from './components/product-list-info/product-list-info.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    ContentBarComponent,
    ProductListInfoComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
