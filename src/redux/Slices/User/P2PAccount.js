import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const $apiP2PAccount = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users'


export const fetchP2PAccount = createAsyncThunk(
    'fetchAccount/fetchP2PAccount',
    async (id) => {
        const { data } = await axios.get(`${$apiP2PAccount}/${id}/usersP2PandOneClickBuy`)
        return data
    }
) 


const initialState ={
    p2pAccount: [],
    status: 'loading',
}


export const P2PAccount = createSlice({
     name: 'p2paccountuser',
     initialState,
     reducers: {
   
     },
     extraReducers: {
      [fetchP2PAccount.pending]: (state) => {
        state.status = 'loading'
      },
      [fetchP2PAccount.fulfilled]: (state, action) => {
        state.status = 'succes'
        state.p2pAccount = action.payload
      },
      [fetchP2PAccount.rejected]: (state) => {
        state.status = 'error'
      },
     },
})

export const {  } = P2PAccount.actions

export default P2PAccount.reducer;