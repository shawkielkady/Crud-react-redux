import { configureStore } from '@reduxjs/toolkit'
import post from './productSlice'
import auth from './authSlice'
const store = configureStore({ reducer: { post , auth} })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export default store;