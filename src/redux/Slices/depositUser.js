import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clickCrypto: false,
    itemsCrypto: [],
    openModal: false,
}

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
    },
})

export const { setClickCrypto, setItemsCrypto, setOpenModal } = depositUser.actions

export default depositUser.reducer