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
          map(response => {
            if (response.status === 200) {
              console.log('success');
              return actions.postFileSuccess({history: payload.history});
            } else {
              return actions.postFileFailure({error: 'Error en la carga del archivo'});
            }
          }),
          catchError(() => actions.postFileFailure)
        )
      )
    )
  );
  postFileSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.postFileSuccess),
      switchMap(payload =>
        this.api.postHistory(payload.history).pipe(
          map(response => {
            if (response.status === 200) {
              console.log('history success');
              return actions.postHistorySuccess();
            } else {
              return actions.postHistoryFailure({error: 'Error'});
            }
          }),
          catchError(error => actions.postHistoryFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: ApiPostService) {
  }
}
