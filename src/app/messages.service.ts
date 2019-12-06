import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { Chat } from './chat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  currentUser: string;

  constructor(private http: HttpClient) { }
   
  getChat(): Observable<Chat[]> {
    return this.http.get<Chat[]>(environment.index+'/channels')
    }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(environment.index+'/messages')
    } 
   
  getUser(username: string): Observable<any> {
    return this.http.get(environment.index+username)
  }

  addNewMsg(message: Message): Observable<Message> {
    return this.http.post<Message>(`${environment.index}/message`, message)
  }

  updateMsg(message: Message): Observable<void> {
    return this.http.put<void>(`${environment.index}/message/${message.id}`, message)
  }
}
