import { Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";

export const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: ProductListComponent},
  {path:'cart', component: CartComponent}
];
