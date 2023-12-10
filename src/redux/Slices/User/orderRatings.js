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


const initialState = {
    openModal: false, 
    isAction: '',
    isRequest: false,
    isAnonymus: false,
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
})

export const { setAction, setOpenModal, setAnonymus } = orderRatings.actions
export default orderRatings.reducer