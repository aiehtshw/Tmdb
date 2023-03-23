import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  //middleware: [thunk, loggerMiddleware], // Logları görmek istediğimizde açabiliriz.
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
