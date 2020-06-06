import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from '../wishlistdata.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
public price:number ;
 public p:number=156;
 public update;
 public tax:number=25;
  constructor(private _wishlistdata:WishlistdataService,) { 
    this.nextCount();
    // this.quality(1,);
  }
   public cartarr=[];
   public val;
public o;
public hearttype;
public wishlist=[];
  ngOnInit(): void {
    this._wishlistdata.cartpage.subscribe(c => {
      this.cartarr=c;
     this.o=this.cartarr.length;
     
  });
  if(this.cartarr.length > 0)
  {
    this.val=true;
    console.log(this.cartarr.length);
  }
  }
  quality(q,id){
    let  index = this.cartarr.findIndex(x => x.id === id);

    this.cartarr[index].cost=q*(this.cartarr[index].cost);
    // console.log("came",this.cartarr[index].cost);
    // console.log(this.price);
    this.update=true;
    
  }
  nextCount() {
    this._wishlistdata.cartdetails();  
  } 


  addNew(index,id){
    this._wishlistdata.prodmsg(index,id);
    
    this.cartarr.splice(index,1);
    if(this.cartarr.length === 0)
    {
      this.val=false;
    }   
    }
    
   



    Changeheart(index,id)
    {
      if(this.cartarr[index].carheart=="fa fa-heart-o")
      {
      this.cartarr[index].carheart= "fa fa-heart";
      this._wishlistdata.sendMessage(this.cartarr[index]);
      }
      else{
        this.cartarr[index].carheart= "fa fa-heart-o";
        this._wishlistdata.deletefromlist(id);
        this._wishlistdata.count.subscribe(c => {
          this.wishlist=c;
         console.log("here",this.wishlist);
      });
      this._wishlistdata.nextCount(); 
        
        
      }
    }
}