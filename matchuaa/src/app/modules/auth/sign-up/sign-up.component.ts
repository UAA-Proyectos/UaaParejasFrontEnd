import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HotToastService } from '@ngneat/hot-toast';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('pass')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

export function ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value < 18) {
    return { 'age': true };
  }
  return null;
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup(
    {
      user: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      date: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );
  
  constructor(private router: Router, private authService: AuthService, private toast: HotToastService) { }

  get user() {
    return this.signUpForm.get('user');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get pass() {
    return this.signUpForm.get('pass');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get date(){
    return this.signUpForm.get('date')
  }
  ngOnInit(): void {
  }

  signUp(){
    const signUpData = this.signUpForm.value
    this.authService.signUp(signUpData).pipe(
      this.toast.observe(
        {
          success: 'Su cuenta se ha creado con exito',
          loading: "Creando usuario...",
          error: "Tuvimos un error"
        }
      )
    ).subscribe(() => {
      this.router.navigate(['/auth/login']);
    })
  }
}
