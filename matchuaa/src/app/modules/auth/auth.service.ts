import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient) { }

  login(userCredentials: UserCredentials): Observable<LoginResponse | void> {
    return this.http.post<LoginResponse>(`${environment.API_URL}/auth`, userCredentials).pipe(
      map((res: LoginResponse) => {
        this.saveUserId(res.id);
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


  private saveUserId(id: number) {
    window.localStorage.setItem('userId', id.toString());
  }

  private getUserId(): number | null {
    const userId = window.localStorage.getItem('userId')
    return userId ? parseInt(userId) : null;
  }

  private logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('userId');
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
