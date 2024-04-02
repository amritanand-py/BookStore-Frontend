import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginform!: FormGroup;
  loginError: string = '';

  constructor(private userservice: UserService, private formbuilder: FormBuilder) {}


  ngOnInit(): void {
    this.loginform = this.formbuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]]
      }
    )
  }

  //API Integration 
  loginUser(): void{
    const requestData = {
      email : this.loginform.value.email,
      password : this.loginform.value.password
    }
    console.log("login hogya");

    this.userservice.login(requestData).subscribe(
      (response:any)=>{
        console.log("Login successful", response.data);
        localStorage.setItem('token', response.data.token);

        //set timmer
      },
      (error: any) => {
        console.log("Login Failed",error.message);

      }
    )
  }

}
