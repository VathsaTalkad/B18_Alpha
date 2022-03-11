import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent implements OnInit {
  public allBook: any = [];
  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.getTotalBooks();
  }

  getTotalBooks() {
    this.shared.getTotalBooks().subscribe((res) => {
      this.allBook = res;
      console.log(this.allBook);
    });
  }
}









