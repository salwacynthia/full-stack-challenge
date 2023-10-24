import {
  createUserFailure,
  createUserRequest,
  createUserSuccess,
} from 'Domain/Action/User/UserAction';
import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import { IEpic } from '../Epics';

// !Challenge: Slice
// You should use the actions created by the slice challenge here
export const createUserEpic: IEpic = (action$, _, { UserRepository }) =>
  action$.pipe(
    filter(createUserRequest.match),
    switchMap(() =>
      from(
        UserRepository.createUser({
          name: '?',
          email: '?',
        }),
      ).pipe(
        map(() => createUserSuccess()),
        catchError(() => of(createUserFailure({payload : 'error in creating user'}))),
      ),
    ),
  );
