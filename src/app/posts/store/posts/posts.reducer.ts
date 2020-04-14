import {Action, createReducer, on} from '@ngrx/store';
import * as PostsActions from './posts.actions';
import {Post} from './post.model';

export const postsFeatureKey = 'posts';

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string;
}

export const initialState: PostState = {
  posts: null,
  loading: true,
  error: null
};

const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, state => ({
    ...state
  })),
  on(PostsActions.loadPostsSuccess, (state, {posts}) => ({
    ...state,
    loading: false,
    posts
  })),
  on(PostsActions.loadPostFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  })),
);

export function reducer(state: PostState | undefined, action: Action) {
  return postsReducer(state, action);
}
