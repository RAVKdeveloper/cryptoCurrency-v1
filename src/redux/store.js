import { configureStore } from '@reduxjs/toolkit'
import  testSlice from './Slices/testSlice'
import userInfo from './Slices/userInfo'
import depositUser from './Slices/depositUser'

export const store = configureStore({
  reducer: {
    test: testSlice,
    userInfo,
    depositUser,
  },
})
    