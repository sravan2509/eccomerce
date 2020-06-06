import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  imageURL: string = "";
  uploadForm: FormGroup;
  constructor(public fb:FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      
    })
   }

   ngOnInit(): void { 
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
       // fade in the overlay
      //  if(window.innerWidth<=991){
      //  $('.overlay').toggleClass('active');
      // }
      // if(window.innerWidth>991){$('.overlay').removeClass('active');}
  });
  }


  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  // Submit Form
  submit() {
    console.log(this.uploadForm.value)
  }



}





