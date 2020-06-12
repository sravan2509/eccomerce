import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {Iproduct} from './pro';


@Injectable({
  providedIn: 'root'
})
export class WishlistdataService {
  getproducts():Iproduct[]{

    return [{"id":0,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":150,"originalcost":200,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    {"id":1,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":3.3,"cost":250,"originalcost":300,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    {"id":2,"img":"../../assets/badam.webp","name":"Badam","quant":"1kg","rating":2.4,"cost":350,"originalcost":450,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    {"id":3,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":1.3,"cost":450,"originalcost":500,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    {"id":4,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":550,"originalcost":600,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    {"id":5,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":1.3,"cost":650,"originalcost":700,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    {"id":6,"img":"../../assets/tea.webp","name":"Tea Powder","quant":"1kg","rating":2.9,"cost":750,"originalcost":800,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    {"id":7,"img":"../../assets/chilli.webp","name":"Chilli Powder","quant":"1kg","rating":3.4,"cost":900,"originalcost":1000,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
    ]
  }
  private _teacherMessageSource = new Subject<any>();
  // teacherMessage$ = this._teacherMessageSource.asObservable();
  counter=0;
  x=[];
  y=[];
  z=[];
f:any;
p=[];
  public  a=[{"id":0,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":150,"originalcost":200,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
  {"id":1,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":3.3,"cost":250,"originalcost":300,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
  {"id":2,"img":"../../assets/badam.webp","name":"Badam","quant":"1kg","rating":2.4,"cost":350,"originalcost":450,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
  {"id":3,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":1.3,"cost":450,"originalcost":500,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
  {"id":4,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":4.3,"cost":550,"originalcost":600,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
  {"id":5,"img":"../../assets/pista.jpg","name":"pistachio","quant":"1kg","rating":1.3,"cost":650,"originalcost":700,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
  {"id":6,"img":"../../assets/tea.webp","name":"Tea Powder","quant":"1kg","rating":2.9,"cost":750,"originalcost":800,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
  {"id":7,"img":"../../assets/chilli.webp","name":"Chilli Powder","quant":"1kg","rating":3.4,"cost":900,"originalcost":1000,"offer":"10%","button":"wishlist","carbutton":"Add to cart","carheart":"fa fa-heart-o"},
  ]
  
  count: BehaviorSubject<any>;
details: BehaviorSubject<any>;
cartpage: BehaviorSubject<any>;
pro: BehaviorSubject<any>;
pop: BehaviorSubject<any>;
  constructor() {
      this.count = new BehaviorSubject(this.x);
      this.details=new BehaviorSubject(this.y); 
      this.cartpage=new BehaviorSubject(this.z); 
      this.pro=new BehaviorSubject(this.a);   
      
  }
  // for wishlist
//send  data to wishlist
  sendMessage(message:any){
    this._teacherMessageSource.next(message);
    this.x.push(message);
  }
  //delete data from wishlist
  deletefromlist(id)
  {
    this.x = this.x.filter(item => item.id !== id);
  }
  nextCount() {
    this.count.next(this.x);
}

// for pro-details
  send(message:any){
    this._teacherMessageSource.next(message);
    this.y=message;
  }
 
nextCount1() {
    
  this.details.next(this.y);  
}

// for cart
cart(message:any){
  this._teacherMessageSource.next(message);
  this.z.push(message);
}

cartdetails() {
  
this.cartpage.next(this.z);  
}

// for products
// change hearts in products page after deleting from wishlist
prodmsg(message:any,id:any){
 let  index = this.a.findIndex(x => x.id === id);
  // this._teacherMessageSource.next(index);
  this.a[index].carheart="fa fa-heart-o";
  this.a[index].carbutton="Add To cart";
}
product()
{
  this.pro.next(this.a); 
}
}


