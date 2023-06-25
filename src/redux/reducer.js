import { combineReducers } from "@reduxjs/toolkit";
import { phoneReducer } from "./phonebook/phoneSlice";
import { filterReducer } from "./phonebook/filterSlice";
import { authReducer } from "./auth/AuthSlice";

export const reducer = combineReducers(
  {
    phones: phoneReducer,
    filter: filterReducer,
    auth: authReducer
  }
)