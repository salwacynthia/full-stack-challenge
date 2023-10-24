import { userSlice } from 'Infrastructure/Slice/User/UserSlice';

type SliceActions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never;
}[keyof T];

export type ActionTypes = SliceActions<typeof userSlice.actions>;
