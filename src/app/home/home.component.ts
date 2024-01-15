import { Component } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private _basket: BasketService) {}
  addBasket() {
    this._basket.basketCount += 1;
  }
}
