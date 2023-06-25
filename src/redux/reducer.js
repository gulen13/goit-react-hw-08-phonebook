import { combineReducers } from "@reduxjs/toolkit";
import { phoneReducer } from "./phonebook/phoneSlice";
import { filterReducer } from "./phonebook/filterSlice";
import { persistedAuthReducer } from "./auth/AuthSlice";

export const reducer = combineReducers(
  {
    phones: phoneReducer,
    filter: filterReducer,
    auth: persistedAuthReducer
  }
)