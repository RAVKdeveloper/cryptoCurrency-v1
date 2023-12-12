import { configureStore } from '@reduxjs/toolkit'
import  testSlice from './Slices/testSlice'
import userInfo from './Slices/userInfo'
import depositUser from './Slices/depositUser'
import oneClickBuy from './Slices/oneClickBuy'
import orderOneClick from './Slices/orderOneClick'
import P2PAccount from './Slices/User/P2PAccount'
import orderRatings from './Slices/User/orderRatings'
import orderChat from './Slices/User/orderChat'

export const store = configureStore({
  reducer: {
    test: testSlice,
    userInfo,
    depositUser,
    oneClickBuy,
    orderOneClick,
    P2PAccount,
    orderRatings,
    orderChat,
  },
})
    