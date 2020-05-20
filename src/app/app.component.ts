import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom';
  public searched;
  onsearch(){
    this.searched=true;
  }
  offsearch(){
    this.searched=false
  }
}
