import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UpdateProfile, UserProfile } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }


  updateProfile(profile: UpdateProfile): Observable<void>{
    const userId = this.authService.getUserId();
    return this.http.put<any>(`${environment.API_URL}/user/${userId}`, profile).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  uploadImage(image: File): Observable<void> {
    const userId = this.authService.getUserId();
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append("file", image, image.name);
    formData.append("userId", userId!.toString())
    return this.http.post<void>(`${environment.API_URL}/file/`, formData).pipe(
      map((res: void) => {
        return res
      }), catchError((err) => this.handlerError(err))
    );
  }

  get currentUserProfile$(): Observable<UserProfile | null>{
    const userId = this.authService.getUserId();
    return this.http.get<any>(`${environment.API_URL}/user/${userId}`).pipe(
      map((res) => {
        return res.user_profile as UserProfile;
      }),
      catchError((err) => this.handlerError(err))
    );
  } 

  private handlerError(err: any): Observable<never> {
    if (err.status == 401) {
      Swal.fire("Error", "Usuario no autorizado", 'error');
    }
    else if (err.status == 500) {
      Swal.fire("Error", "Error en el servidor", 'error');
    }
    else {
      Swal.fire("Error", "error inesperado", 'error');
    }
    return throwError(err);
  }


  getPossibleMatch(): Observable<UserProfile | null>{
    const userId = this.authService.getUserId();
    return this.http.get<any>(`${environment.API_URL}/possible_match/${userId}`).pipe(
      map((res) => {
        return res.user_profile as UserProfile;
      }),
      catchError((err) => this.handlerError(err))
    );
  } 


  updateInteraction(userId2: number, status: number): Observable<boolean | void>{
    const userId = this.authService.getUserId();
    let body = {user2: userId2, newStatus: status}
    return this.http.put<any>(`${environment.API_URL}/changeinteraction/${userId}`, body).pipe(
      map((res) => {
        return res.match as boolean
      }),
      catchError((err) => this.handlerError(err))
    )
  }
}
