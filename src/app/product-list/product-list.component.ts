import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(index) {
    window.alert('Nombre del producto: ' + products[index].name);
  }

  onNotify() {
    window.alert('You will be notified when the goes on sale');
  }
}
