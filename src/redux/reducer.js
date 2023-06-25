import { combineReducers } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneSlice";
import { filterReducer } from "./filterSlice";

export const reducer = combineReducers(
  {
    phones: phoneReducer,
    filter: filterReducer,
  }
)