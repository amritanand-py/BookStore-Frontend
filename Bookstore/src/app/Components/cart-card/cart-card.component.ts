import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss'
})
export class CartCardComponent {

  count: number = 1;

  increase() {
    this.count++;
  }

  decrease() {
    if (this.count > 1) {
      this.count--;
    }
  }
}
