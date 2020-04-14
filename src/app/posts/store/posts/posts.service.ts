import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";

import {Observable} from 'rxjs';

import {PostState} from './posts.reducer';
import * as actions from './posts.actions';
import {getLoading} from './posts.selectors';
import {SolverHistory} from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private store: Store<PostState>) {
  }

  postFile(file: File, history: SolverHistory) {
    this.store.dispatch(actions.postFile({file, history}));
  }

  getLoading(): Observable<boolean> {
    return this.store.pipe(select(getLoading));
  }
}
