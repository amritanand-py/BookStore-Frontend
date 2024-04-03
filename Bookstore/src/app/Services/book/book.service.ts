import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpService)
  {
    // this.token = localStorage.getItem('token');
    if (typeof localStorage !== 'undefined') {
      this.token=localStorage.getItem("token");
    }
  }

  token:any;
  displayBook(){
    const header = new HttpHeaders({
      'Content-type':'application/json'
    });
    return this.http.getService('https://localhost:7284/api/Book?page=1&pageSize=12',true,{header});
  }

}
