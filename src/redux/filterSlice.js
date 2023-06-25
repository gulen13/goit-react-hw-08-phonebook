const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFiler(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFiler } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;