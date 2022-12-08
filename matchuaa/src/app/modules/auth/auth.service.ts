import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { LoginResponse, UserCredentials, UserRegister } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  constructor(private http: HttpClient, private router: Router) { }

  login(userCredentials: UserCredentials): Observable<LoginResponse | void> {
    return this.http.post<LoginResponse>(`${environment.API_URL}/auth`, userCredentials).pipe(
      map((res: LoginResponse) => {
        this.saveUserId(res.id);
        this.setUserType(res.user_type)
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }


  signUp(userRegister: UserRegister): Observable<void>{
    userRegister.date = moment(userRegister.date).format('YYYY-MM-DD')
    console.log(userRegister);
    return this.http.post<void>(`${environment.API_URL}/register`, userRegister).pipe(
      map((res: void)=> {
        return res
      }), catchError((err) => this.handlerError(err))
    )
  }

  logout(): Observable<void>{
    return this.http.post<void>(`${environment.API_URL}/logout`, []).pipe(
      map((res: void)=> {
        this.router.navigate(['home'])
        this.loggedIn.next(false);
        localStorage.removeItem('userId');
        return res
      }), catchError((err) => this.handlerError(err))
    )
  }

  private saveUserId(id: number) {
    window.localStorage.setItem('userId', id.toString());
  }

  public getUserId(): number | null {
    const userId = window.localStorage.getItem('userId')
    return userId ? parseInt(userId) : null;
  }


  private setUserType(user_type: number){
    window.localStorage.setItem('user_type', user_type.toString());
  }

  public getUserType(): number | null {
    const user_type = window.localStorage.getItem('user_type')
    return user_type ? parseInt(user_type) : null;
  }

  private handlerError(err: any): Observable<never> {
    if (err.status == 401) {
      Swal.fire("Error", "email y/o contraseña incorrecta", 'error');
    }
    else if (err.status == 404) {
      Swal.fire("Error", "usuario no encontrado", 'error');
    }
    else if( err.status == 409){
      Swal.fire("Error", "El correo ingresado ya está registrado", 'error')
    }
    else {
      Swal.fire("Error", "error inesperado", 'error');
    }
    return throwError(err);
  }
}
