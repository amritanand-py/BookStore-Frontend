import { Component, Input, OnInit } from '@angular/core';
import { DetailsService } from '../../Services/details/details.service';
import { CartService } from '../../Services/cart/add-to-cart.service';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss'] // Note the correct spelling of styleUrls
})
export class BookDetailPageComponent implements OnInit {
  
  @Input() id: number = 5;
  book: any;
  outcome: any;
  quantity: number = 1; // Initialize quantity to 1
  addToBagClicked: boolean = false;
  count: number = 1;

  constructor(private detailServices: DetailsService, private cartService:CartService) {}

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

  addToBag() {
    const request = {
      UserId: 1,
      BookId: this.id,
      Quantity: this.quantity // Use the quantity value
    };

    this.cartService.addToCart(request).subscribe(
      (response: any) => {
        console.log('Item added to cart:', response);
        // Handle success response here, if needed
        this.addToBagClicked = true; // Update the state to show the success message or anything else
      },
      (error: any) => {
        console.error('Error adding item to cart:', error);
        // Handle error response here, if needed
      }
    );
  }

  increase() {
    this.count++;
  }

  decrease() {
    if (this.count > 1) {
      this.count--;
    }
  }
}
