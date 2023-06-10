import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiServiceService, IProducts} from "../services/api-service.service";
import {CarServiceService} from "../services/car-service.service";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(
    public api: ApiServiceService,
    public cartService: CarServiceService
  ) {}

  addProduct(product: IProducts): void {
    this.cartService.addProducts(product);
  }
}
