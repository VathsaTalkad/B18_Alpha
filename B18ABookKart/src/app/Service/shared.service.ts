import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public item:any;
  public bookId:any;
  public userId=535;

constructor(private http:HttpClient,private route: ActivatedRoute) { 
    this.bookId = this.route.snapshot.paramMap.get('id');
    console.log("from constructor"+this.bookId)
   }

  ngOnInit(): void {
  this.bookDetails(this.bookId)
  }

  getTotalBooks(){
    return this.http.get("https://bookcart.azurewebsites.net/api/Book");
  }

  bookDetails(id:any){
    return this.http.get(`${"https://bookcart.azurewebsites.net/api/Book"}/${id}`)
  }
  
  addToCart(bookId:number){   
    let header = new HttpHeaders().set(
      "Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWYXRoc2ExMjMiLCJ1c2VyaWQiOiI1MzUiLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiI5MjQxOTk2Ny05MjMwLTQwMzctYmM3YS1kNTYwNjNiNmNkNWEiLCJleHAiOjE2NDY5MTAwNTYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.laM7ma8tFFJwcMtwZyAiCeMSFMjXOb8ULvVDgRVcaTM"     
    );
   return this.http.post(`${"https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/535"}/${bookId}`,{headers:header})
  }
}













