import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registratinForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registratinForm=new FormGroup({
     userName:new FormControl(null,[Validators.required,Validators.minLength(5)]),
     email:new FormControl(null,[Validators.required,Validators.email]),
     password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
     confirmpassword:new FormControl(null,[Validators.required,Validators.minLength(8)]),
     mobile:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)])

    },this.matchPassword);
  }

  matchPassword(control: AbstractControl): ValidationErrors | null {

    const password = control.get("password")?.value;
    const confirm = control.get("confirmpassword")?.value;


    if (password != confirm) { return { 'noMatch': true } }

    return null

  }
  get userName(){
    return this.registratinForm.get('userName') as FormControl;
  }
  get email(){
    return this.registratinForm.get('email') as FormControl;
  }
  get password(){
    return this.registratinForm.get('password') as FormControl;
  }
  get confirmpassword(){
    return this.registratinForm.get('confirmpassword') as FormControl;
  }
  get mobile(){
    return this.registratinForm.get('mobile') as FormControl;
  }

  onSubmit(){

  }
}
