import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { posts } from '../interfaces/post.interface';
import { comments } from '../interfaces/comments.interface';
const baseUrl = environment.posts;

@Injectable({
  providedIn: 'root'
})

export class PeticionesService {
  constructor(private http: HttpClient) { }
  getPost(): Observable<posts> {
    return this.http.get<posts>(baseUrl + 'posts');
  }
  getComments(id: number): Observable<comments> {
    return this.http.get<comments>(baseUrl + `posts/${id}/comments`);
  }
}
