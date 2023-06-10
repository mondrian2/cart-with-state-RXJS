import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
public products = toSignal(this.http.get<IProducts[]>('https://fakestoreapi.com/products'));
  constructor(private http: HttpClient) { }
}

export interface IProducts {
  "id": 1,
  "title": string;
  "price": number;
  "description": string;
  "category": string;
  "image": string;
  "rating": IRating
}

export interface  IRating {
  "rate": number;
  "count": number;
}
