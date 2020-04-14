import * as fromPosts from './posts.reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectPostsState = createFeatureSelector<fromPosts.PostState>(
  fromPosts.postsFeatureKey
);

export const getLoading = createSelector(
  selectPostsState,
  state => state.loading
);
