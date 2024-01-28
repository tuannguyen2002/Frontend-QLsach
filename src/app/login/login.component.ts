import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import ValidateForm from '../helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: SharedService, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Pass: ['', Validators.required],
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);

      this.auth.Login(this.loginForm.value).subscribe({
        next: (res) => {
          alert(res.message)
          this.router.navigate(['/sach'])
        },
        error: (err) => {
          alert(err?.error.message)
        }
      })
    }else{
      ValidateForm.validateAllFormField(this.loginForm);
    }
  }

}
