import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';


const store = configureStore({
  reducer: {},
});

export default store;