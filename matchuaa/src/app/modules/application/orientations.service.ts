import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Orientation } from 'src/app/models/Orientation';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrientationsService {

  constructor(private http: HttpClient, private authService: AuthService) { }


  get orientations$(): Observable<Orientation[]>{
    return this.http.get<any>(`${environment.API_URL}/orientations`).pipe(
      map((res) => {
        return res.data as Orientation[];
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

}
