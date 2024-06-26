import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpService)
  {
    // this.token = localStorage.getItem('token');
    if (typeof localStorage !== 'undefined') {
      this.token=localStorage.getItem("token");
    }
  }

  token:any;
  // id:number=1;
  displayDetailBook(id:any){
    const header = new HttpHeaders({
      'Content-type':'application/json'
    });
    return this.http.putService(`https://localhost:7284/api/Book/getbyID?id=${id}`,true);
  }
}
