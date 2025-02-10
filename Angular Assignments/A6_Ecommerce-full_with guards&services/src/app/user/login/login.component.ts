import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Role } from '../../auth/role.enum'; 

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authservice: AuthService) {}
  //role:string="Admin"
  myloginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  // login(userrole: Role) {
  //   this.authservice.Login(userrole);
  //   this.router.navigate(['/user/dashboard']);
  // }


  OnSubmit(){ 
    let role:Role |null=null;
    const {name,password}= this.myloginForm.value;
    if(name==='admin' && password==='admin123'){
      role=Role.Admin
    }
    else if(name==='manager' && password==='manager123'){
      role=Role.Manager
    }
    else{
      role=Role.Customer
    }

    if(role){
      this.authservice.Login(role)
      alert(`${role} Login Successful`)
      this.router.navigate(['/user/dashboard'])
    }
    else{
      alert("Login Failed!")
    }
  }


}
  // OnSubmit(){
    //const role= this.authservice.getRole();

//     let role:Role |null=null;
//     const {name,password}= this.myloginForm.value;
//     if(name==='admin' && password==='admin123'){
//       role=Role.Admin
//       alert("Form Submitted")
//       this.router.navigate(["/user/dashboard"])
//     }
//     else if(name==='manager' && password==='manager123'){
//       role=Role.Manager
//       alert("Form Submitted")
//       this.router.navigate(["/user/dashboard"])
//     }
//     else if(role==='Customer'){
//       role=Role.Customer
//       alert("Form Submitted")
//       this.router.navigate(["/user/dashboard"])
//     }
//     else{
//       console.log('Login Failed')
//       alert("Login failed")
//     }
//   }
// }

    // role:string='';
  // onSubmit(form:any){
  //   if(form){
  //     alert("Form Submitted!");
  //   }
  //   form.reset();
  //   // if(this.role!==Role.Customer){

  //   // }
  // }

