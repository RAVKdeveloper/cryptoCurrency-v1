import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const $apiMessage = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/ordersP2PAndOneClickBuy/'

export const createMessage = createAsyncThunk(
    'createChat/createUserChat',
    async (obj) => {
        const { orderId, val, userId, nick } = obj
        const { data } = await axios.post(`${$apiMessage}${orderId}/chatP2P`, {
            date: new Date().toLocaleString(),
            userName: nick,
            idUser: userId,
            text: val,
            orderNo: orderId
        })
           
        return data
    }
)

export const fetchMessage = createAsyncThunk(
    'fetchMessage/fetchUserMessage',
    async (id) => {
        const { data } = await axios.get(`${$apiMessage}${id}/chatP2P`)

        return data
    }
)

const initialState = {
    message: [],
    statusFetch: 'loading',
}

export const orderChat = createSlice({
    name: 'orderChat',
    initialState,
    extraReducers: {
        [fetchMessage.pending]: (state) => {
            state.statusFetch = 'loading'
        },
        [fetchMessage.fulfilled]: (state, action) => {
            state.statusFetch = 'succes'
            state.message = action.payload
        },
        [fetchMessage.rejected]: (state) => {
            state.statusFetch = 'error'
        },
        [createMessage.fulfilled]: (state, action) => {
            state.message.push(action.payload)
        }
    }
})


export default orderChat.reducer