import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,singlecomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { WishlstComponent } from './wishlst/wishlst.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductComponent } from './product/product.component';
import { AddformComponent } from './addform/addform.component';
import { CatComponent } from './cat/cat.component';
import { DupComponent } from './dup/dup.component';
import { MainComponent } from './main/main.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';

@NgModule({
  declarations: [
    AppComponent,
    singlecomponent,
    WishlstComponent,
    MycartComponent,
    ProductComponent,
    AddformComponent,
    CatComponent,
    DupComponent,
    MainComponent,
    ProDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
