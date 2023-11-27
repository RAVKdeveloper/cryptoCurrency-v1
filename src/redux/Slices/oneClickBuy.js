import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const $apiFiat = 'https://656071c683aba11d99d0d2b9.mockapi.io/ravk/api/fiatandcrypto?sortBy=article&order=asc'

export const fetchFiatList = createAsyncThunk(
    'cryptoList/fetchFiatList',
    async (search) => {
      const searchVal = search === '' ? '' : `&article=${search}`
      const { data } = await axios.get(`${$apiFiat} ${searchVal}`)
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
    cryptoPrewiew: [ { article: 'USDT' } ],
    convertCrypto: '',
    convertFiat: '',
    error: '',
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
        state.cryptoPrewiewPrewiew = action.payload
     },
     setConvertCrypto: (state, action) => {
        state.convertCrypto = action.payload * 39;
     },
     setConvertFiat: (state, action) => {
        state.convertFiat = Number(action.payload)/39;
     },
     setError: (state, action) => {
        state.error = action.payload
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
     }
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
} = oneClickBuy.actions

export default oneClickBuy.reducer