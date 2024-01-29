import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import ValidateForm from '../helpers/validateform';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

//-----------------------------------------------
//      admin account
//      email: admin@admin.com
//      pass : admin123
//-----------------------------------------------


export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: SharedService,
    private router: Router,
    private toast: NgToastService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
    })
  }

  onSignup(){
    if(this.signupForm.valid){

      this.auth.signUp(this.signupForm.value).subscribe({
        next: (res) => {
          this.toast.success({detail: "SUCCESS", summary: res.message, duration:4000})
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.toast.error({detail: "ERROR", summary: err?.error.message, duration:4000})
        }
      })
    }else{
      ValidateForm.validateAllFormField(this.signupForm);
    }
  }

}
