import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Post} from '../posts/store/posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {
  api = 'https://jsonplaceholder.typicode.com/';
  posts = 'posts/';

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.api}${this.posts}`
    );
  }
}
