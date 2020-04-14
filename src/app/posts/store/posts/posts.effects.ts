import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as actions from './posts.actions';
import {ApiPostService} from '../../../apis/api-post.service';
import {catchError, map, switchMap} from "rxjs/operators";


@Injectable()
export class PostsEffects {
  postFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.postFile),
      switchMap(payload =>
        this.api.postFile(payload.file).pipe(
          map(response =>
            response.status === 200 ? actions.postFileSuccess : actions.postFileFailure
          ),
          catchError(response => actions.postFileFailure)
        )
      )
    )
  );
  postFileSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.postFileSuccess),
      switchMap(payload =>
        this.api.postHistory(payload.history).pipe(
          map(response => response.status === 200 ? actions.postHistorySuccess : actions.postHistoryFailure),
          catchError(response => actions.postHistoryFailure)
        ),
      )
    )
  );

  constructor(private actions$: Actions, private api: ApiPostService) {
  }
}
