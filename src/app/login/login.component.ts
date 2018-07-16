import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  post:any;
  serverError:boolean = false;
  constructor(private service: LoginService, private router: Router, 
    private formBuilder: FormBuilder) { 

      this.loginForm = this.formBuilder.group({
        email: [null, Validators.required],
        password: [null, Validators.required],
      });
  }

  ngOnInit() {
   
  }

  checkLogin(post) {
    this.serverError = false;
    this.service.checkLogin(post.email, post.password).subscribe(resp => {
      console.log(resp['status']);
        if(resp['status'] == "success"){
          this.serverError = false;
          this.router.navigate(['signup']);
        }else{
          //Show error message
          this.serverError = true;
        }
    });
    
  }
}
