import { configureStore } from '@reduxjs/toolkit'
import  testSlice from './Slices/testSlice'
import userInfo from './Slices/userInfo'
import depositUser from './Slices/depositUser'
import oneClickBuy from './Slices/oneClickBuy'

export const store = configureStore({
  reducer: {
    test: testSlice,
    userInfo,
    depositUser,
    oneClickBuy,
  },
})
    