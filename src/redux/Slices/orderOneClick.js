import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const $apiUser = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users'
const $apiOneClickOrder = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users/'

export const chekBalanceFetch = createAsyncThunk(
    'checkBalance/checkBalanceUser',
    async (id) => {
        const { data } = await axios.get(`${$apiUser}/${id}`)
        return data
    }
)


export const getOrderUser = createAsyncThunk(
   'fetchOrder/fetchOrderUser',
   async (obj) => {
      const { user, order } = obj
      const { data } = await axios.get(`${$apiOneClickOrder}${user}/oneClickBuy/${order}?type=oneClickBuy`)
      return data
   } 
) 


const initialState = {
   order: [],
   status: 'loading',
   chekBalance: [],
   statusBalance: 'pending',
   statusGetOrder: 'loading',
   orderWithDb: [],
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
     [getOrderUser.pending]: (state) => {
         state.statusGetOrder = 'loading'
     },
     [getOrderUser.fulfilled]: (state, action) => {
         state.statusGetOrder = 'succes'
         state.orderWithDb = action.payload
     },
     [getOrderUser.rejected]: (state) => {
         state.statusGetOrder = 'error'
     } 
    },
})


export const { setOrder } = orderOneClick.actions
export default orderOneClick.reducer