import { combineReducers, configureStore } from '@reduxjs/toolkit';
//global data app around whole application
import counterReducer from './lib/redux/reducers/counterSlice';
import userCart from 'lib/redux/reducers/getUserSlice';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import isLogin from 'lib/redux/reducers/isLoginSlice';
const reducers = combineReducers({
  counterReducer,
  userCart,
  isLogin,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counterReducer', 'userCart', 'isLogin'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
