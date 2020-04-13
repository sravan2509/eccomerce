import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  goods=['vegetables ','fruits ','pulses','oils'] 

  constructor(
    private router:Router,
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) { }
public x=[];
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
     address:['',Validators.required],
     state:['',Validators.required],
      phoneno:['', Validators.compose([Validators.required, this.customValidator.phoneValidator()])],
    },
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.log(this.registerForm.value);
      this.x=this.registerForm.value;
      this.router.navigate(['address']);
    }
  }


}
