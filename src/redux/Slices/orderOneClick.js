import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const $apiUser = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users'

export const chekBalanceFetch = createAsyncThunk(
    'checkBalance/checkBalanceUser',
    async (id) => {
        const { data } = await axios.get(`${$apiUser}/${id}`)
        return data
    }
)

const initialState = {
   order: [],
   status: 'loading',
   chekBalance: [],
   statusBalance: 'pending',
}


export const orderOneClick = createSlice({
    name: 'orderOneClick',
    initialState,
    reducers: {
       setOrder: (state, action) => {
          state.order = action.payload
       },
    },
    extraReducers: {
     [chekBalanceFetch.pending]: (state) => {
        state.statusBalance = 'pending' 
     },
     [chekBalanceFetch.fulfilled]: (state, action) => {
        state.chekBalance = action.payload
        state.statusBalance = 'succes'
     },
     [chekBalanceFetch.rejected]: (state) => {
        state.statusBalance = 'error'
     },
    },
})


export const { setOrder } = orderOneClick.actions
export default orderOneClick.reducer