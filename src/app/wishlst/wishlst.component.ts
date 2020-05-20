import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlst',
  templateUrl: './wishlst.component.html',
  styleUrls: ['./wishlst.component.css']
})
export class WishlstComponent implements OnInit {

  constructor() { }
public x=false;
  people= [
    {
      "itemname": "../../assets/fruits.jpg","name": "Oranges box","price":"Rs.30/-","mrp":"Rs.50/-",
      "quan":"1 dozon","rating":"4.9"
    },
    {
      "itemname": "../../assets/fruits.jpg","name": "Oranges box","price":"Rs.30/-","mrp":"Rs.50/-",
      "quan":"1 dozon","rating":"4.9"
    },
    
  ];
    ngOnInit() {
    }
    addNew(index){
    this.people.splice(index,1);
    console.log(this.people.length);
   
    }
  
  
  
  }
  