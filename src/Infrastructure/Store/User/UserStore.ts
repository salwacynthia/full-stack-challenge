import { UserEntity } from 'Infrastructure/Entity/UserEntity';

export interface IUserState {
  users: UserEntity[];
  loading: boolean;
  error: string | null;
}
export const initialUserState = {
  users: [],
  loading: false,
  error: null,
} as IUserState;
