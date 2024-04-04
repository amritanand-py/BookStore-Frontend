import { Component, Input, OnInit, Output } from '@angular/core';
import { DetailsService } from '../../Services/details/details.service';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrl: './book-detail-page.component.scss'
})
export class BookDetailPageComponent implements OnInit{
  
@Input() id:number=5;
  book:any;
  outcome:any;
 quantity: number = 1; // Initialize quantity to 1

  constructor(private detailServices: DetailsService) {
    
    
  }
  ngOnInit(): void {
    this.detailServices.displayDetailBook(this.id).subscribe(
      (response: any) => {
        console.log(this.id);
        console.log(this.book)
        this.outcome = response;
        console.log(this.outcome);
      },
      (error: any) => {
        console.error('Error fetching book data:', error);
      }
    );

  }


  
  

}
