import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { posts } from '../interfaces/post.interface';
const baseUrl = environment.posts;

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private http: HttpClient) { }
  getPost(): Observable<posts> {
    return this.http.get<posts>(baseUrl + 'posts');
  }
}
