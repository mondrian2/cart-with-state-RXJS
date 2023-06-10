import {computed, Injectable, signal} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IProducts} from "./api-service.service";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  public carItems$ = new BehaviorSubject<IProducts[]>([]);
  cartItems = signal<IProducts[]>([]);
  public subTotal$ = new BehaviorSubject<number>(0);
  subtotal = computed(() => this.cartItems()
    .reduce((prev: any, curr: IProducts) => {
      return prev + curr.price;
    }, 0))
  public totalItems$ = new BehaviorSubject<number>(0);
  totalItems = computed(() => this.cartItems().length);
  public products: IProducts[] = [];

  constructor() {
  }

  addProducts(product: IProducts) {
    this.products.push(product);
    this.mapTotal();
  }

  addProductSignal(product: IProducts): void {
    this.cartItems.mutate(value => {
      value.push(product)
    })
  }

  removeProduct(id: number) {
    this.products.splice(id, 1);
    this.mapTotal();
  }

  removeProductSignal(id: number) {
    this.cartItems.mutate(value => {
      value.splice(id, 1);
    })
  }

  mapTotal() {
    const total = this.products.reduce((prev: number, curr: any) => {
      return prev + curr.price
    }, 0);
    this.subTotal$.next(total);
    this.totalItems$.next(this.products.length);
    this.carItems$.next(this.products);
  }

}
