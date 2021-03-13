import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
 
  private apiURL = "https://jsonplaceholder.typicode.com";
  
  constructor(private httpClient: HttpClient)  { }

 httpOptions = {
  headers:new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

getAll(): Observable <Post[]> {
  return this.httpClient.get<Post[]>( this.apiURL + '/posts?userId='+8,this.httpOptions);
}
create(post: any): Observable<Post[]>{
  return this.httpClient.post<Post[]>(this.apiURL + '/posts/',JSON.stringify(post),this.httpOptions)
}
}
