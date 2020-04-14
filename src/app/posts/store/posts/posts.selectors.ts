import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPosts from './posts.reducer';

export const selectPostsState = createFeatureSelector<fromPosts.PostState>(
  fromPosts.postsFeatureKey
);

export const getPosts = createSelector(
  selectPostsState,
  state => state.posts
);

export const getLoading = createSelector(
  selectPostsState,
  state => state.loading
);
