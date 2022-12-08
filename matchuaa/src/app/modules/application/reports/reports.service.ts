import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  //reporte #1 -> usuarios activos OK
  getReport1(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reportone`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }
  //reporte #3 -> orientaciones sexuales OK
  getReport2(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reportthree`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }
  //porcentaje hombre y mujeres
  getReport3(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reportsix`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  //cantidad de matches hechos en la app
  getReport4(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reportseven`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  //usuarios con más interacciones
  getReport5(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reporteight`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  //usuarios que mas envian mensajes
  getReport6(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reportnine`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  //promedio edad
  getReport7(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reportedad`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  //reporte de signos zodiacales
  getReport8(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reportsigno`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  //reporte de estados con más usuarios
  getReport9(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/reportestados`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  //reporte de mes en el cual más usuarios se unen
  getReport10(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/report_active_month`).pipe(
      map((res) => {
        return res.data;
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
