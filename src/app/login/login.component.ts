import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  loginForm: FormGroup;
  submitted = false;


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });

  }

  login(loginForm) {
    this.submitted = true;
    if (loginForm.value.userName == 'admin' && loginForm.value.password == 'admin') {
      this.router.navigateByUrl('\student');
    } else {
      alert("Invalid Creditionals"); return;
    }
    loginForm.reset();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  Reset(): void {
    this.loginForm.reset();
  }

}
