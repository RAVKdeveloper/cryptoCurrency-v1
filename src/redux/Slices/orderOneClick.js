import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const $apiUser = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users'
const $apiOneClickOrder = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/ordersP2PAndOneClickBuy'

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
      const { user, order, type } = obj
      const { data } = await axios.get(`${$apiOneClickOrder}?orderNo=${order}&takerId=${user}&status=loading&type=${type}`)
      return data
   } 
) 

export const putOrderStatus = createAsyncThunk(
   'putOrderStatus/putOrderStatusUser',
   async (obj) => {
      const { type, order, status, id, statusOrder } = obj
      const { data } = await axios.put(`${$apiOneClickOrder}/${id}?orderNo=${order}&type=${type}`, {
         orderStatus: status,
         status: statusOrder,
      })

      return data
   }
)


export const getReleased = createAsyncThunk(
   'releasedCoins/goReleasedCoins',
   async (obj) => {
      const { takerId, value, balance } = obj
      const { data } = await axios.put(`${$apiUser}/${takerId}`, {
         balance: Number(balance) + Number(value),
      })
           
      return data
   }
)

export const putBalanceMinus = createAsyncThunk(
   'releasedCoins/getReleasedMinus',
   async (obj) => {
      const { id, balance, val } = obj
      const { data } = await axios.put(`${$apiUser}/${id}`, {
         balance: balance - val,
      })
           
      return data
   }
)

export const completeOrders = createAsyncThunk(
   'orderComplete/CompleteOrder',
   async (id) => {
      const { data } = await axios.put(`${$apiOneClickOrder}?orderNo=${id}&type=OneClickBuy`, {
         orderStatus: 'complete',
         status: 'complete'
      })

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
   statusPutOrder: 'loading',
   statusReleased: 'loading',
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
     },
     [putOrderStatus.pending]: (state) => {
         state.statusPutOrder = 'loading'
     }, 
     [putOrderStatus.fulfilled]: (state, action) => {
      state.statusPutOrder = 'succes'
      state.orderWithDb = [action.payload]
     },
     [putOrderStatus.rejected]: (state) => {
      state.statusPutOrder = 'error'
     },
     [getReleased.pending]: (state) => {
       state.statusReleased = 'loading'
     },
     [getReleased.fulfilled]: (state) => {
       state.statusGetOrder = 'complete'
       state.statusReleased = 'succes'
     },
     [getReleased.rejected]: (state) => {
      state.statusReleased = 'error'
     },
     [completeOrders.fulfilled]: (state, action) => {
      state.orderWithDb = action.payload
     }, 
    },
})


export const { setOrder } = orderOneClick.actions
export default orderOneClick.reducer