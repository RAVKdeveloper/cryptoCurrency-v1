import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';


const initialState = {
    item: [],
    btcBalance: '0.000000000', 
}


export const userInfo = createSlice({
    name: 'info',
    initialState,
    reducers: {
      setItem: (state, action) => {
        state.item = action.payload
      },
      setBalanceBtc (state, action) {
        state.btcBalance = action.payload
      },
    },
  })


export const { setItem, setBalanceBtc } = userInfo.actions

export default userInfo.reducer