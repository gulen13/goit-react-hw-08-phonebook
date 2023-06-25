import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
}

const pendingAction = action => action.type.endsWith('/pending');

const rejectedAction = action => action.type.endsWith('/rejected');

const handlePending = (state) => {
  state.isLoading = true
  state.error = ''
}

const handleRejected = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
}

const handleFetchContactsFulfilled = (state, { payload }) => {
  state.items = payload
  state.error = null;
  state.isLoading = false
}

const handleAddContactFulfilled = (state, { payload }) => {
  state.items.push(payload)
  state.error = null;
  state.isLoading = false
}

const handleDeleteContactFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(phone => phone.id === payload.id);
  state.items.splice(index, 1);
  state.error = null;
  state.isLoading = false
}


const phoneSlice = createSlice({
  name: "phones",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled,)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addMatcher(pendingAction, handlePending)
      .addMatcher(rejectedAction, handleRejected)
  },
});

export const phoneReducer = phoneSlice.reducer;