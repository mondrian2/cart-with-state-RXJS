import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarServiceService} from "../services/car-service.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  quant = 0
  constructor(
    public cartService: CarServiceService,
    private router: Router
  ) {
    this.cartService.totalItems$.subscribe(t => this.quant = t);
  }
  goList(): void {
    this.router.navigate(['/products']);
  }
  goCart(): void {
    this.router.navigate(['/cart']);
  }
}
