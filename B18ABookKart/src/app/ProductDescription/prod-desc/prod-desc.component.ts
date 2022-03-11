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















































// public addedtowishlist:boolean=false;
// addToWishlist(id:any){ 
  //   this.serv.addToWishlist(id).subscribe((res=>{  
  //     let response:any=res
  //     console.log(response)
  //     if(response.length!==0){
  //       alert("added to wishlist")
  //     }
  //     else if(response.length===0)
  //     {
  //       alert("removed from Wishlist")
  //     }
    
  //   }))
  //   this.addedtowishlist=!this.addedtowishlist;
  // }


// console.log("from constructor"+this.bookId)
//  console.log("from function"+JSON.stringify(this.items))





// import { Component, OnInit } from '@angular/core';
// import { ProductService } from 'src/app/Service/product.service';
// import { SharedService } from 'src/app/Service/shared.service';

// @Component({
//   selector: 'app-prod-desc',
//   templateUrl: './prod-desc.component.html',
//   styleUrls: ['./prod-desc.component.scss']
// })
// export class ProdDescComponent implements OnInit {

//   public products : any

//     constructor(private shared:SharedService, private productservice:ProductService) { }

//   ngOnInit(): void {
//     this.shared.getProducts().subscribe(res=>{this.products = res;
//   })
//   }
//   bookDetails(items : any){
//     this.productservice.bookDetails(items);
//   }
// }