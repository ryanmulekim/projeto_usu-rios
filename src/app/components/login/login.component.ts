import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../shared/service/login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
     RouterLink,
     HttpClientModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  constructor(
    private router: Router,
    private loginService:LoginService,
    private fb: FormBuilder
  ){

  }

  login(){
    this.loginService.login(this.loginForm.value).subscribe((res)=>{
      this.router.navigate(['/inicio']);
    })
  }

}

