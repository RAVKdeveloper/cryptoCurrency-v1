import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchCrypto = createAsyncThunk(
  'cryptoPrewiev/fetchByCrypto',
  async () => {
    const { data } = await axios.get('https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/cryptolist?page=1&limit=5')
    return data
  }
)


const initialState = {
    clickCrypto: false,
    itemsCrypto: [],
    openModal: false,
    prewiev: [],
    isPrewiev: false, 
    openChain: false,
    prewievChain: [],
    isPrewievChain: false,
    isQr: false,
    itemsPrewiev: [],
    status: 'loading',
    cryptoAdress: '',
    statusRes: 'loading',
}

export const fetchAdress = createAsyncThunk(
  'userCryptoAdress/fetchByAdress',
  async (id) => {
    const { data } = await axios.get(`https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users/${id}`)
    return data
  }
)

export const depositUser = createSlice({
    name: 'getdeposit',
    initialState,
    reducers: {
      setClickCrypto: (state) => {
        state.clickCrypto = true;
      },
      setItemsCrypto (state, action) {
        state.itemsCrypto = action.payload
      },
      setOpenModal (state, action) {
        state.openModal = action.payload;
      },
      setPrewiv (state, action) {
        state.prewiev = action.payload
      },
      setIsPrewiev (state, action) {
        state.isPrewiev = action.payload
      },
      setOpenChain (state, action) {
        state.openChain = action.payload
      },
      setPrewivChain (state, action) {
        state.prewievChain = action.payload
      },
      setIsPrewievChain (state, action) {
        state.isPrewievChain = action.payload
      },
      setQr (state, action) {
        state.isQr = action.payload
      },
    },
    extraReducers: {
      [fetchCrypto.fulfilled]: (state, action) => {
           state.status = 'succes'
           state.itemsPrewiev = action.payload;
      },
      [fetchCrypto.pending]: (state) => {
           state.status = 'loading'
      },
      [fetchCrypto.rejected]: (state, action) => {
           state.status = 'error'
      },
      [fetchAdress.pending]: (state) => {
            state.statusRes = 'loading'        
      },
      [fetchAdress.fulfilled]: (state) => {
        state.statusRes = 'loading'        
     },
    }
})

export const { setClickCrypto,
   setItemsCrypto,
   setOpenModal,
   setIsPrewiev, setPrewiv,
   setOpenChain,
   setPrewivChain,
   setQr, 
   setIsPrewievChain, 
  } = depositUser.actions

export default depositUser.reducer