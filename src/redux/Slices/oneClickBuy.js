import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const $apiFiat = 'https://656071c683aba11d99d0d2b9.mockapi.io/ravk/api/fiatandcrypto?sortBy=article&order=asc'
const $apiCrypto = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/cryptolist?sortBy=cryptoName&order=asc'

export const fetchFiatList = createAsyncThunk(
    'fiatList/fetchFiatList',
    async (search) => {
      const searchVal = search === '' ? '' : `&article=${search}`
      const { data } = await axios.get(`${$apiFiat} ${searchVal}`)
      return data
    }
)

export const fetchCryptoList = createAsyncThunk(
   'cryptoList/fetchCryptoList',
   async (search) => {
     const searchVal = search === '' ? '' : `&cryptoName=${search}` 
     const { data } = await axios.get(`${$apiCrypto} ${searchVal}`)
     return data
   }
 )


const initialState = {
    action: 'buy',
    status: 'loading',
    fiatList: [],
    openFiat: false,
    fiatPrewiew: [ { article: 'UAH' } ],
    openCrypto: false,
    cryptoPrewiew: 'USDT',
    convertCrypto: '',
    convertFiat: '',
    error: '',
    cryptoList: [],
    statusCrypto: 'loading',
    openPayment: false,
    paymentName: 'Tinkoff',
  }


export const oneClickBuy = createSlice({
    name: 'oneclickbuy',
    initialState,
    reducers: {
      setAction: (state, action) => {
         state.action = action.payload;
      },
      setClickFiat: (state, action) => {
         state.openFiat = action.payload
      },
      setFiatPrewiev: (state, action) => {
         state.fiatPrewiew = action.payload
      },
      setClickCrypto: (state, action) => {
        state.openCrypto = action.payload
     },
     setCryptoPrewiev: (state, action) => {
        state.cryptoPrewiew = action.payload
     },
     setConvertCrypto: (state, action) => {
        state.convertCrypto = action.payload * 39;
     },
     setConvertFiat: (state, action) => {
        state.convertFiat = Number(action.payload/39).toFixed(2);
     },
     setError: (state, action) => {
        state.error = action.payload
     },
     setOpenPayment: (state, action) => {
      state.openPayment = action.payload
     }
    },
    extraReducers: {
      [fetchFiatList.pending]: (state) => {
          state.status = 'loading'
      },
      [fetchFiatList.fulfilled]: (state, action) => {
          state.status = 'succes'
          state.fiatList = action.payload
     },
     [fetchFiatList.rejected]: (state) => {
          state.status = 'error'
     },
     [fetchCryptoList.pending]: (state) => {
      state.statusCrypto = 'loading'
     },
     [fetchCryptoList.fulfilled]: (state, action) => {
      state.statusCrypto = 'succes'
      state.cryptoList = action.payload
     },
     [fetchCryptoList.rejected]: (state) => {
      state.statusCrypto = 'error'
     },
    },
})


export const { 
   setAction,
   setClickFiat,
   setFiatPrewiev,
   setClickCrypto, 
   setCryptoPrewiev, 
   setConvertCrypto, 
   setConvertFiat, 
   setError,
   setOpenPayment,
} = oneClickBuy.actions

export default oneClickBuy.reducer