import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    action: 'buy',
  }


export const oneClickBuy = createSlice({
    name: 'oneclickbuy',
    initialState,
    reducers: {
      setAction: (state, action) => {
         state.action = action.payload;
      },
    },
})


export const { setAction } = oneClickBuy.actions

export default oneClickBuy.reducer