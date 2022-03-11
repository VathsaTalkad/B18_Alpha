import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/Service/shared.service';


@Component({
    selector: 'app-prod-desc',
    templateUrl: './prod-desc.component.html',
    styleUrls: ['./prod-desc.component.scss']
  })
export class ProdDescComponent implements OnInit {

  public items:any;
  public bookId:any;
  public userId=535;

  constructor(private shared: SharedService,private route: ActivatedRoute) {
    this.bookId = this.route.snapshot.paramMap.get('id');
    console.log("from constructor"+this.bookId)
   }
   
  ngOnInit(): void {
  this.bookDetails(this.bookId)
  }

  bookDetails(id:any){
    this.shared.bookDetails(id).subscribe((res=>{
       this.items=res;
       console.log("from function"+JSON.stringify(this.items))
    }))
  }
  
  addToCart(){
    this.shared.addToCart(this.bookId).subscribe((res=>{
      alert("added to cart");
    }))
  }
}











