import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  message = {
    text:''
  };
  constructor() { }

  setMessage(msg:string): void{
    this.message={text: msg};

  }
  hasMessage(): boolean{
    return this.message.text.trim().length>0;
  }
  getMessage():any{
    setTimeout(()=>this.message.text ='',1000 )
    return this.message;
  }
}
