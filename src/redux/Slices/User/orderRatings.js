import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const $apiCreateRating = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/ratingsUsersP2P'


export const createRatingOrder = createAsyncThunk(
    'createOrder/createOrderRating',
    async (obj) => {

        const { rewierId, recipientId, good, rewievtext, rewierName, anonymus, orderId } = obj

        const { data } = await axios.post(`${$apiCreateRating}`, {
            createdAt: Date.now(),
            rewier: rewierId,
            recipient: recipientId,
            date: new Date().toLocaleString(),
            good: good,
            rewievtext: rewievtext,
            rewierName: rewierName,
            anonymus: anonymus,
            orderId: orderId,
        })

        return data
    }
)

export const fetchOrderRating = createAsyncThunk(
    'fetchRating/fetchOrderRating',
    async (obj) => {
        const { rewierId, orderId } = obj
        const { data } = await axios.get(`${$apiCreateRating}?orderId=${orderId}&rewier=${rewierId}`)
        return data
    }
)

export const deleteOrderRating = createAsyncThunk(
    'deleteRating/deleteOrderRating',
    async (id) => {
       const { data } = await axios.delete(`${$apiCreateRating}/${id}`)

       return data
    }
)

export const putOrderRating = createAsyncThunk(
    'putRating/putOrderRating',
    async (obj) => {
        const { id, good, rewievtext, anonymus } = obj
        const { data } = await axios.put(`${$apiCreateRating}/${id}`, {
            good: good,
            rewievtext: rewievtext,
            anonymus: anonymus,
        })

        return data
    }
)

const initialState = {
    openModal: false, 
    isAction: '',
    isRequest: false,
    isAnonymus: false,  
    orderRating: [],
    ratingStatus: 'pending'
}


export const orderRatings = createSlice({
    name: 'orderRatings',
    initialState,
    reducers: {
       setAction: (state, action) => {
        state.isAction = action.payload
       },
       setOpenModal: (state, action) => {
        state.openModal = action.payload
       },
       setAnonymus: (state, action) => {
        state.isAnonymus = action.payload
       }
    },
    extraReducers: {
       [fetchOrderRating.fulfilled]: (state, action) => {
           state.orderRating = action.payload
           state.ratingStatus = 'succes'
       },
       [fetchOrderRating.rejected]: (state) => {
           state.ratingStatus = 'error'
       },
       [createRatingOrder.fulfilled]: (state, action) => {
           state.orderRating = [action.payload]
       },
       [putOrderRating.fulfilled]: (state, action) => {
           state.orderRating = [action.payload]
       }
    },
})

export const { setAction, setOpenModal, setAnonymus } = orderRatings.actions
export default orderRatings.reducer 