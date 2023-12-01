import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const $apiFiat = 'https://656071c683aba11d99d0d2b9.mockapi.io/ravk/api/fiatList?sortBy=article&order=asc'
const $apiCrypto = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/cryptolist?sortBy=cryptoName&order=asc'
const $apipaymentall = 'https://656071c683aba11d99d0d2b9.mockapi.io/ravk/api/paymentMethod'

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

 export const fetchPaymentListAll = createAsyncThunk(
   'paymentList/fetchPaymentList',
   async (fiat) => {
     const { data } = await axios.get(`${$apipaymentall}?fiat=${fiat}`)
     return data
   }
 )
 export const fetchPaymentPrewiev = createAsyncThunk(
   'paymentPrewiev/fetchPaymentPrewiev',
   async (fiat) => {
     const { data } = await axios.get(`${$apipaymentall}?fiat=${fiat}&sortBy=rating&order=desc&page=1&limit=2`)
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
    cryptoList: [],
    statusCrypto: 'loading',
    openPayment: false,
    paymentName: '',
    paymentAll: [],
    statusPaymentAll: 'loading',
    paymentPrewiev: [],
    statusPaymentPrewiev: 'loading',
    valueFiat: '',
    valueCrypto: '',
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
     setValueFiat: (state, action) => {
        state.valueFiat = action.payload
     },
     setValueCrypto: (state, action) => {
      state.valueCrypto = action.payload
     },
     setOpenPayment: (state, action) => {
      state.openPayment = action.payload
     },
     setPayment: (state, action) => {
      state.paymentName = action.payload
     },
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
     [fetchPaymentListAll.pending]: (state) => {
      state.statusPaymentAll = 'loading'
     },
     [fetchPaymentListAll.fulfilled]: (state, action) => {
      state.statusPaymentAll = 'succes'
      state.paymentAll = action.payload
     },
     [fetchPaymentListAll.rejected]: (state) => {
      state.statusPaymentAll = 'error'
     },
     [fetchPaymentPrewiev.pending]: (state) => {
      state.statusPaymentPrewiev = 'loading'
     },
     [fetchPaymentPrewiev.fulfilled]: (state, action) => {
      state.statusPaymentPrewiev = 'succes'
      state.paymentPrewiev = action.payload
     },
     [fetchPaymentPrewiev.rejected]: (state) => {
      state.statusPaymentPrewiev = 'error'
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
   setValueCrypto,
   setValueFiat,
   setOpenPayment,
   setPayment,
} = oneClickBuy.actions

export default oneClickBuy.reducer