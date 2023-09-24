import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Redux/UserSlice';
import LoginSlice from './Redux/LoginSlice';
import CartSlice from './Redux/CartSlice';

export const Store = configureStore({
  reducer: {
    user: UserSlice,
    login: LoginSlice,
    cart: CartSlice,
  },
})