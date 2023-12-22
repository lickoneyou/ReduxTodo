import { reducer } from "../reducers/reducer";
import { reducerTextArea } from "../reducers/reducerTextArea";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  todo: reducer,
  value: reducerTextArea,
});

export const store = configureStore({
  reducer: reducers,
});
