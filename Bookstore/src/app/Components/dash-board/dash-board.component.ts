import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements OnInit{
  data:any;
  constructor(private bookService: BookService){}

  ngOnInit() {
    this.bookService.displayBook().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
        //this.data = this.data.data;
        //console.log(this.data);
      },
      (error) => {
        console.error('Error fetching book data:', error);
      }
    );
  }

  selected = "";
  dropdownOpen: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }


}
