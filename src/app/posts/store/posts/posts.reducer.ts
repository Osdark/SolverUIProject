import {Action, createReducer, on} from "@ngrx/store";

import * as PostsActions from './posts.actions';

export const postsFeatureKey = 'posts';

export interface PostState {
  loading: boolean;
  error: string;
  file: File;
}

export const initialState: PostState = {
  loading: false,
  error: null,
  file: null
};

const postsReducer = createReducer(
  initialState,
  on(PostsActions.postFile, state => ({
    ...state,
    loading: true
  })),
  on(PostsActions.postFileSuccess, state => ({
    ...state,
    loading: false
  })),
  on(PostsActions.postFileFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  })),
);

export function reducer(state: PostState | undefined, action: Action) {
  return postsReducer(state, action);
}
