import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IProducts} from "./api-service.service";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  public carItems$ = new BehaviorSubject<IProducts[]>([]);
  public subTotal$ = new BehaviorSubject<number>(0);
  public totalItems$ = new BehaviorSubject<number>(0);
  public products: IProducts[] = [];
  constructor() { }
  addProducts(product: IProducts){
    this.products.push(product);
    this.mapTotal();
  }
  removeProduct(id: number){
    this.products.splice(id, 1);
    this.mapTotal();
  }
  mapTotal(){
    const total = this.products.reduce((prev: number, curr: any) => {
      return prev + curr.price
    }, 0);
    this.subTotal$.next(total);
    this.totalItems$.next(this.products.length);
    this.carItems$.next(this.products);
  }

}
