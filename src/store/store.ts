import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { appReducer } from '@/store/slice/appSlice.ts';
import { userReducer } from '@/store/slice/userSlice.ts';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);
