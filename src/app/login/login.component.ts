import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import ValidateForm from '../helpers/validateform';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: SharedService, private router: Router, private toast: NgToastService ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Pass: ['', Validators.required],
    })
  }

  onLogin(){
    if(this.loginForm.valid){

      this.auth.Login(this.loginForm.value).subscribe({
        next: (res) => {
          this.toast.success({detail: "SUCCESS", summary: res.message, duration:4000})
          this.router.navigate(['/sach'])
        },
        error: (err) => {
          this.toast.error({detail: "ERROR", summary: err?.error.message, duration:4000})
        }
      })
    }else{
      ValidateForm.validateAllFormField(this.loginForm);
    }
  }

}
