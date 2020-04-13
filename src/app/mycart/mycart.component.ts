import { Component, OnInit } from '@angular/core';

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
  constructor() { }
   

  ngOnInit(): void {
  }
  quality(q){
    this.price=q*156;
    console.log(this.price);
    this.update=true;
    
  }



}