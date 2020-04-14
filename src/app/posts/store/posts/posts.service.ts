import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PostState} from './posts.reducer';
import {loadPosts} from './posts.actions';
import {Observable} from 'rxjs';
import {Post} from './post.model';
import {getLoading, getPosts} from './posts.selectors';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private store: Store<PostState>) {
  }

  loadPosts() {
    return this.store.dispatch({type: loadPosts.type});
  }

  getPosts(): Observable<Post[]> {
    return this.store.pipe(select(getPosts));
  }

  getLoading(): Observable<boolean> {
    return this.store.pipe(select(getLoading));
  }
}
