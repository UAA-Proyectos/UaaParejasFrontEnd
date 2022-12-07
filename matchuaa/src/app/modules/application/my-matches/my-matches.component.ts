import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, interval, map, mergeMap, Observable, of, switchMap } from 'rxjs';
import { Chat, MessageRequest } from '../../../models/chat';
import { AuthService } from '../../auth/auth.service';
import { ChatService } from '../chat.service';

@UntilDestroy()
@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.scss']
})
export class MyMatchesComponent implements OnInit {

  @ViewChild('endOfChat')
  endOfChat!: ElementRef;

  messageControl = new FormControl('');
  chatListControl = new FormControl('');

  current_match_id: number | null = null

  constructor(private chatService: ChatService, private authService: AuthService, private toast: HotToastService) { }
 /* messages$: Observable<any | null> = this.chatListControl.valueChanges.pipe(
    map(value => value![0]),
    switchMap((match_id => this.chatService.getMesssages(parseInt(match_id!))))
  )*/
  messages:any= []

  myChats$: Observable<Chat[]> = this.chatService.chats$

  selectedChat$: Observable<any | null> = combineLatest([
    this.chatListControl.valueChanges,
    this.myChats$
  ]).pipe(map(([value, chats]) =>
    chats.find((c: Chat) => c.match.id_match === parseInt(value!))
  ))


  user = this.authService.getUserId()
  ngOnInit(): void {

    this.chatListControl.valueChanges.subscribe((x) => this.current_match_id = x ? parseInt(x) : null)

    interval(2 * 500)
      .pipe(
        mergeMap(() => this.chatService.chats$))
      .subscribe(data => console.log(data))

    interval(2 * 500)
      .pipe(
        mergeMap(() => this.chatService.getMesssages(this.current_match_id)))
      .subscribe(data => {
        if(data.length != this.messages.length){
          this.messages = data
          this.scrollToBottom()
        }
        
      
      })

  }




  sendMessage() {
    const message = this.messageControl.value;
    const id_user = this.authService.getUserId()
    const id_match = this.current_match_id

    if (message && id_user && id_match) {

      const messageRequest: MessageRequest = { id_user, message, id_match }
      this.chatService.sendMessage(messageRequest).pipe(
        this.toast.observe({
          loading: 'Enviando mensaje...',
          success: 'Mensaje enviado',
          error: 'Tuvimos un error :(',
        })
      ).subscribe(res => {
        console.log(res)
        this.ngOnInit()
        this.scrollToBottom();
        this.messageControl.setValue('');
      });
    }
    /* const selectedChatId = this.chatListControl.value[0];
 
     if (message && selectedChatId) {
       this.chatsService
         .addChatMessage(selectedChatId, message)
         .subscribe(() => {
           this.scrollToBottom();
         });
       this.messageControl.setValue('');
     }*/
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.endOfChat) {
        this.endOfChat.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

}
function tap(log: { (...data: any[]): void; (message?: any, ...optionalParams: any[]): void; }): import("rxjs").OperatorFunction<void | import("../../../models/chat").Chat, unknown> {
  throw new Error('Function not implemented.');
}

