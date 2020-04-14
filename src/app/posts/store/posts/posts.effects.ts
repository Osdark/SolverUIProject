import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as PostsActions from './posts.actions';
import {ApiPostService} from '../../../apis/api-post.service';


@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostsActions.loadPosts),
    mergeMap(() =>
      this.api.getAllPosts().pipe(
        map(posts => PostsActions.loadPostsSuccess({posts})),
        catchError(error => of(PostsActions.loadPostFailure({error})))
      ))
    )
  );

  constructor(private actions$: Actions, private api: ApiPostService) {
  }
}
