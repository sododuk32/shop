import { configureStore } from '@reduxjs/toolkit';
//global data app around whole application
import counterReducer from './lib/redux/reducers/counterSlice';
import userCart from 'lib/redux/reducers/getUserSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userCart: userCart,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
