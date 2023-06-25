import { combineReducers } from "@reduxjs/toolkit";
import { phoneReducer } from "./phonebook/phoneSlice";
import { filterReducer } from "./phonebook/filterSlice";

export const reducer = combineReducers(
  {
    phones: phoneReducer,
    filter: filterReducer,
  }
)