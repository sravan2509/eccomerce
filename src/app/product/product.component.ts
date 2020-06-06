import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import{Router} from '@angular/router';
import { WishlistdataService } from '../wishlistdata.service';
import {Iproduct} from '../pro';
import {Iprice} from '../pro';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Iproduct[];
  a:Iproduct[];
  constructor(private http:HttpClient,private spinner:NgxSpinnerService,
    private router:Router,private _wishlistdata:WishlistdataService){
      this.nextCount();
    
  }
  dropdownList1=[];
  dropdownList2=[];
  // filteredpro=[]
  filterprice:Iprice[];
  selprice=[];
  selItems1=[];
  selItems2=[];
  ddsettings={};
  ar=[];
  filtersettings={};
  filterpricesettings={};
  allpost;
  notEmptyPost=true;
  notscrolly=true;
   public wish=[];
//  public a=[];
 public wishlist=[];

  ngOnInit(){
    this.timer();
    this.products=this._wishlistdata.getproducts();
    this.a=this.products;
    this.dropdownList1=[
      {id:1,name:"Badam"},
      {id:2,name:"pistachio"},
      {id:3,name:"Avacado"},
      {id:4,name:"Cashew"},
      {id:5,name:"Nuts"} 
    ];

    this.dropdownList2=[
      {id:6,name:"Chilli Powder"},
    ];

    this.filterprice=[
      {item_id:0,item_text:"800-1000",min:800,max:1000},
      {item_id:1,item_text:"600-800",min:600,max:800},
      {item_id:2,item_text:"400-600",min:400,max:600},
      {item_id:3,item_text:"below 400",min:0,max:400},
      
    ];
this.filterpricesettings={
  singleSelection:true,
  idField:"item_id",
  textField:"item_text",
  selectAllText:"Select All",
  unSelectAllText:"unselect All",
  itemsShowLimit:4,
  allowSearchFilter:true
}
    this.filtersettings={
      singleSelection:false,
      idField:"id",
      textField:"name",
      selectAllText:"Select All",
      unSelectAllText:"unselect All",
      itemsShowLimit:4,
      allowSearchFilter:true
    };

    this.ddsettings={
      singleSelection:false,
      idField:"id",
      textField:"name",
      selectAllText:"Select All",
      unSelectAllText:"unselect All",
      itemsShowLimit:5,
      allowSearchFilter:true
    };
  
    this._wishlistdata.pro.subscribe(c => {
      this.a=c;
  });
 

this. loadInitPost();
  }
 

  fp(max:number,min:number){
    console.log(this.products);
    return this.products.filter(t=>t.cost>=min && t.cost<=max)
    }
    onitemselprice(item:any){
    
      console.log("JGD")
      console.log(this.selprice)
      
      console.log("maximum value is"+this.filterprice[0].max);
      if(this.selprice[0].item_id==0){
        this.a=this.fp(this.filterprice[0].max,this.filterprice[0].min);
        this. loadInitPost();
      }
  
      if(this.selprice[0].item_id==1){
        this.a=this.fp(this.filterprice[1].max,this.filterprice[1].min);
        this. loadInitPost();
      }
  
      if(this.selprice[0].item_id==2){
        this.a=this.fp(this.filterprice[2].max,this.filterprice[2].min);
        this. loadInitPost();
      }
  
  
      if(this.selprice[0].item_id==3){
        this.a=this.fp(this.filterprice[3].max,this.filterprice[3].min);
        this. loadInitPost();
      }
    }
    //   for(var i=0;i<this.selprice.length;i++){
    //     for(var j=0;j<this.selprice.length;j++){
    //       if(this.selprice[i].min==this.selprice[j].max){
    //         max=this.selprice[i].max;
    //               min=this.selprice[j].min;
    //               if(i==this.selprice.length-1 && j==this.selprice.length-1){
    //                 this.filteredpro=this.fp(max,min);
        
    //               }
    //     }
     
    //   }
      
    // }
  
  
    onItemDeSelectprice(item:any){
      console.log("removed item"+item.item_text);
      if(this.selprice.length==0){
        this.a=this.products;
        this. loadInitPost();
      }
      
    }
    
    onselallprice(items:any){
      console.log(items);
    }
  onitemsel(item:any){
    //   console.log(item);
    this.ar.push(item);
    // console.log("add",this.ar);
    this._wishlistdata.filters(this.ar);
    this._wishlistdata.pro.subscribe(c => {
      this.a=c;
  });

  this.nextCount();
  this. loadInitPost();
  console.log(this.a);
  }

  onselall(items:any){
    // console.log(items);

    this.ar=items;
    // console.log(this.ar);
    this._wishlistdata.filters(this.ar);
    this._wishlistdata.pro.subscribe(c => {
    this.a=c;
     
  });
  this.nextCount();
  this. loadInitPost();
  console.log(this.a);
  }
  ondeselall(items:any){
    this.ar=[];
    // console.log("alldel",this.ar);
    this._wishlistdata.filters(this.ar);
    this._wishlistdata.pro.subscribe(c => {
      this.a=c;
     
  });
  this.nextCount();
  this. loadInitPost();
  console.log(this.a);
  }

  onItemDeSelect(item:any){
    
    this.ar = this.ar.filter(x => x.id !== item.id);
    this._wishlistdata.filters(this.ar);
    this._wishlistdata.pro.subscribe(c => {
      this.a=c;
     
  });
  this.nextCount();
  this. loadInitPost();
  console.log(this.a);
  }

  loadInitPost(){

   
    // const url='http://tlino.96.lt/api/getblogspot';
    // this.http.get(url).subscribe(data=>{
      // console.log(this.a);
      
    // });
    this.allpost =this.a;
  }
  onScroll()
  {
    if(this.notscrolly && this.notEmptyPost)
    {
      this.spinner.show();
      this.notscrolly=false;
      this.loadNextPost();
    }
  }
 
  x:any
  days :number  
  hours:number   
  minutes :number
  seconds :number
  time
   year = new Date().getFullYear();
  expireday = new Date(this.year, 5, 26).getTime();
  timer(){
      const today = new Date().getTime();
      this.time = this.expireday - today;
  
    if(this.time>0){
      this.x=setInterval(()=>{
        this.time--;
       this.days   = Math.floor(this.time / (1000 * 60 * 60 * 24));
       this.hours   = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       this.minutes = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));    
       this.seconds = Math.floor((this.time % (1000 * 60)) / 1000);
      });
    }
  }
  
 
  loadNextPost()
  {
    // const url='http://tlino.96.lt/api/getblogspot';
    const lastpost=this.allpost[this.allpost.length-1];
    const lastpostid=lastpost.id;
    const dataTosend = new FormData();
    dataTosend.append('id',lastpostid);
    // this.http.post(url,dataTosend)
    // .subscribe((data:any)=>{
      // const newpost=this.data[0];
      const newpost=this.a[-1];
    this.spinner.hide();
    if(newpost[0]===0)
    {
      this.notEmptyPost=false;
    }
    this.allpost=this.allpost.concat(newpost);
    this.notscrolly=true;
    // });
    
  }
  sendpic(id,index)
  {
    if(this.a[index].carheart=="fa fa-heart-o")
      {
      this.a[index].carheart= "fa fa-heart";
      this._wishlistdata.sendMessage(this.a[index]);
      console.group("add",id);
      }
      else{
       
        this._wishlistdata.deletefromlist(id);  
        this.a[index].carheart= "fa fa-heart-o";
        this._wishlistdata.count.subscribe(c => {
          this.wishlist=c;
         
      });
      this._wishlistdata.nextCount();  
      }
    
  }
  details(index)
  {
    this._wishlistdata.send(this.a[index]);
  }

  nextCount() {
    this._wishlistdata.product();  
  }
  
  senddata(index)
{
  
  if( this.a[index].carbutton==="go to cart")
  {
    this.router.navigate(['cart']);

  }
  else{
   
    this.a[index].carbutton= "go to cart";
    // this.sendtocart.push(this.data[index]);
  this._wishlistdata.cart(this.a[index]);
 
    
  }
}

}
