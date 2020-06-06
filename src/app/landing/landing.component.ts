import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from '../wishlistdata.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _wishlistpopular:WishlistdataService,  private router:Router,private _wishlistdata:WishlistdataService) { 
    this.timer();
    this.nextCount();
  }
public popular=[];
  ngOnInit() {
    this._wishlistdata.pro.subscribe(c => {
      this.popular=c;
     
  });
  }
  customerscount=1000;
  start;
  count(){
    this.customerscount++;
  }
  timer(){
    this.start=setInterval(()=>{
         this.customerscount=this.customerscount+10;
    },100)
  }
  details(index)
  {
    this._wishlistpopular.send(this.popular[index]);
  }
  public testMe() {
    // window.open( "aboutus" );
    // this.router.navigate(['/aboutus'])
  }
  senddata(index)
{
  
  if( this.popular[index].carbutton==="go to cart")
  {
    this.router.navigate(['cart']);

  }
  else{
   
    this.popular[index].carbutton= "go to cart";
    // this.sendtocart.push(this.popular[index]);
  this._wishlistpopular.cart(this.popular[index]);
 
    
  }
} 
nextCount() {
  this._wishlistdata.product();  
}
}
