import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

const initialState = {
  item: [],
  submit: false,
  delete: false,
  id: null,
}

export const testSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    submitBtn: (state) => {
       state.submit = true;
    },
    setItem: (state, action) => {
      state.item = action.payload
    },
    deleteItem: (state, action) => {
      state.delete = true
      state.id = action.payload
    }
  },
})

export const { submitBtn, setItem, deleteItem } = testSlice.actions

export default testSlice.reducer