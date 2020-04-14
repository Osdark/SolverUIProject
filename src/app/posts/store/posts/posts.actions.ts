import {SolverHistory} from './post.model';
import {createAction, props} from "@ngrx/store";

export const postFile = createAction(
  '[Home] Post file',
  props<{ file: FormData, history: SolverHistory }>()
);

export const postFileSuccess = createAction(
  '[Home] File posted successfully',
  props<{ history: SolverHistory }>()
);

export const postFileFailure = createAction(
  '[Home] Fail in posting file',
  props<{ error: string }>()
);

export const postHistorySuccess = createAction(
  '[Home] History posted successfully'
);

export const postHistoryFailure = createAction(
  '[Home] Fail in posting history',
  props<{ error: string }>()
);
