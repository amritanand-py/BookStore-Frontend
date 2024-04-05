import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:7284/api/Cart/AddToCart';
  token: any;

  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token');
  }

  addToCart(data: any) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token);

    return this.http.postService(this.apiUrl, data, true, { headers });
  }
}
