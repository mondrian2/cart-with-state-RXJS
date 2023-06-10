import {computed, Injectable, signal} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IProducts} from "./api-service.service";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  cartItems = signal<IProducts[]>([]);
  subtotal = computed(() => this.cartItems()
    .reduce((prev: any, curr: IProducts) => {
      return prev + curr.price;
    }, 0))
  totalItems = computed(() => this.cartItems().length);
  products: IProducts[] = [];

  addProductSignal(product: IProducts): void {
    this.cartItems.mutate(value => {
      value.push(product)
    })
  }
  removeProductSignal(id: number) {
    this.cartItems.mutate(value => {
      value.splice(id, 1);
    })
  }

}
