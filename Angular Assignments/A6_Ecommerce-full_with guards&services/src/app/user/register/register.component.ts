import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router:Router){}
  myForm= new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })


  onSubmit(form:any){
    if(form){
      alert("Form Submitted!");
      this.router.navigate(['/user/login'])
    }
    // form.reset();
  }

}

