import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const $apiOrderList = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/ordersP2PAndOneClickBuy'
const $apiCoinsList = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/cryptolist?sortBy=cryptoName&order=asc'


export const fetchOrderListTaker = createAsyncThunk(
    'fetchOrderListTaker/fetchUsersOrderListTaker',
    async (obj) => {
        const { actionType, id ,page } = obj
        const isAction = actionType === '' ? '' : `&status=${actionType}`
        const { data } = await axios.get(`${$apiOrderList}?takerId=${id}${isAction}&sortby=date&order=desc&page=${page}&limit=5`)

        return data
    }
)

export const fetchOrderListMaker = createAsyncThunk(
  'fetchOrderListMaker/fetchUsersOrderListMaker',
  async (obj) => {
      const { actionType, id, page } = obj
      const isAction = actionType === '' ? '' : `&status=${actionType}`
      const { data } = await axios.get(`${$apiOrderList}?makerId=${id}${isAction}&sortby=date&order=desc&page=${page}&limit=5`)

      return data
  }
)

export const fetchCoins = createAsyncThunk(
  'fetchCoins/fetchCoinsOrdersList',
  async () => {
    const { data } = await axios.get($apiCoinsList)

    return data
  }
)

const initialState = {
    actionType: '',
    ordersTaker: [],
    statusLoading: 'loading',
    ordersMaker: [],
    isOpenCoin: false,
    isOpenType: false,
    fetchCoin: [],
    coinPrewiv: 'All',
    typePrewiev: 'Buy / Sell',
    statusPrewiev: 'All',
    isOpenStatus: false,
    date: '',
    currentPage: 1,
}


export const orderList = createSlice({
    name: 'orderList',
    initialState,
    reducers: {
        setActionType: (state, action) => {
          state.actionType = action.payload
        },
        setOpenCoin: (state, action) => {
           state.isOpenCoin = action.payload
        },
        setOpenType: (state, action) => {
          state.isOpenType = action.payload
       },
       setCoinPrewiev: (state, action) => {
          state.coinPrewiv = action.payload
       },
       setTypePrewiev: (state, action) => {
          state.typePrewiev = action.payload
       },
       setStatusPrewiev: (state, action) => {
          state.statusPrewiev = action.payload
       },
       setIsOpenStatus: (state, action) => {
          state.isOpenStatus = action.payload
       }, 
       setDateFetch: (state, action) => {
         state.date = action.payload 
       },
       setCurrentPage: (state, action) => {
        state.currentPage = action.payload
       }
    },
    extraReducers: {
      [fetchOrderListTaker.pending]: (state) => {
        state.statusLoading = 'loading'
      },
      [fetchOrderListTaker.fulfilled]: (state, action) => {
        state.statusLoading = 'succes'
        state.ordersTaker = action.payload
      },
      [fetchOrderListMaker.fulfilled]: (state, action) => {
        state.statusLoading = 'succes'
        state.ordersMaker = action.payload
      },
      [fetchOrderListMaker.pending]: (state) => {
        state.statusLoading = 'loading'
      },
      [fetchCoins.fulfilled]: (state, action) => {
          state.fetchCoin = action.payload
      },
    },
})


export const { setActionType, setOpenCoin, setOpenType, setCoinPrewiev, setTypePrewiev, setStatusPrewiev, setIsOpenStatus, setDateFetch, setCurrentPage } = orderList.actions
export default orderList.reducer