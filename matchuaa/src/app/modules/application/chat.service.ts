import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Chat, Message, MessageRequest } from 'src/app/models/chat';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private authService: AuthService, private http: HttpClient) { }



  get chats$(): Observable<Chat[]>{
    let userId = this.authService.getUserId()
    return this.http.get<any>(`${environment.API_URL}/chats/${userId}`).pipe( 
      map((res) => {
        return res.data as Chat[];
      }),
      catchError((err) => this.handlerError(err))
    )

  }


  getMesssages(match_id: number | null):Observable<Message[]>{
    if(match_id == null)
      return of([])
    let userId = this.authService.getUserId()
     return this.http.get<any>(`${environment.API_URL}/chats/${match_id}/messages`).pipe( 
      map((res) => {
        return res.data as Message[];
      }),
      catchError((err) => this.handlerError(err))
    )
  }

  sendMessage(message: MessageRequest): Observable<void>{
    return this.http.put<any>(`${environment.API_URL}/message`, message).pipe(
      map((res) => {
        return
      }),
      catchError((err) => this.handlerError(err))
    )
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
