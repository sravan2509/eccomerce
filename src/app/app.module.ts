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
import{InfiniteScrollModule} from 'ngx-infinite-scroll';
import{NgxSpinnerModule} from 'ngx-spinner';
import{HttpClientModule} from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';

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
    FormsModule,ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
