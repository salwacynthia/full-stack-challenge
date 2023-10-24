import {
  dependencies as EpicDependencies,
  RootState,
} from 'Infrastructure/Store/Store';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { ActionTypes } from '../Action/Action';
import { createUserEpic } from './CreateUserEpic/CreateUserEpic';

export type IEpic = (
  action$: Observable<ActionTypes>,
  state$: Observable<RootState>,
  dependencies: typeof EpicDependencies,
) => any;
export const rootEpic = combineEpics(createUserEpic);
