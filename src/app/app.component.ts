import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from './wishlistdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _wishlistdata:WishlistdataService){
    this.nextCount();
    console.log("came");
  }
  title = 'ecom';
  public searched;
  public wishlist=[];
  public cart=[];
  onsearch(){
    this.searched=true;
  }
  offsearch(){
    this.searched=false
  }

  ngOnInit() {
    
    this._wishlistdata.count.subscribe(c => {
      this.wishlist=c;     
  });
  this._wishlistdata.cartpage.subscribe(c => {
    this.cart=c;
});
}
nextCount() {
  this._wishlistdata.nextCount(); 
  this._wishlistdata.cartdetails(); 

} 
}
