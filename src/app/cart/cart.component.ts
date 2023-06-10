import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CarServiceService} from "../services/car-service.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cartService: CarServiceService) {
  }

  removeProduct(id: number): void {
    this.cartService.removeProductSignal(id);
  }
}
