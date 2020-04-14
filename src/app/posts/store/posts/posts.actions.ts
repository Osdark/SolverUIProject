import {createAction, props} from '@ngrx/store';
import {Post} from './post.model';

export const loadPosts = createAction(
  '[Posts] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostFailure = createAction(
  '[Posts] Load Posts Failure',
  props<{ error: string }>()
);
