import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  
  constructor(private authService: AuthService, private toast: HotToastService, private router: Router) { }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  login(){
    const userCredentials = this.loginForm.value;
    this.authService.login(userCredentials).pipe(
      this.toast.observe(
        {
          success: 'Sesión iniciada',
          loading: "Iniciando sesión",
          error: "Tuvimos un error"
        }
      )
    ).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }


  ngOnInit(): void {
  }

}
