import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

  public testMe() {
    // window.open( "aboutus" );
    // this.router.navigate(['/aboutus'])
  }
}
