import { combineReducers } from '@reduxjs/toolkit';
import MultiSearchSlice from "./search/multisearch/MultiSearchSlice";

const rootReducer = combineReducers({
  MultiSearch: MultiSearchSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
