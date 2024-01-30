import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';

const preloadedState
  = JSON.parse(localStorage.getItem('authState') as string) || {};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem('authState', JSON.stringify(state));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
