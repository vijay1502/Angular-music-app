import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  public name="";
  constructor(private http: HttpClient) { }
  getArtist(name) {
    // tslint:disable-next-line: max-line-length
        return this.http.get('https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + name + '&api_key=a8ab69addc8c8b6aaa48ba50a7edc09c&format=json');
  }
}
