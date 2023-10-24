import { configureStore } from '@reduxjs/toolkit';
import { rootEpic } from 'Domain/Epics/Epics';
import { MailService } from 'Domain/Service/MailService/MailService';
import { createEpicMiddleware } from 'redux-observable';
import { UserRepository } from '../Repository/User/UserRepository';
import { userReducer } from '../Slice/User/UserSlice';

export const dependencies = {
  UserRepository: new UserRepository([]),
  MailService: new MailService(),
};

const epicMiddleware = createEpicMiddleware({
  dependencies,
});

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic as any);

export type RootState = ReturnType<typeof store.getState>;
