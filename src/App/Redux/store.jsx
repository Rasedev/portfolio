import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import activeChatSlice from './slices/activeChatSlice';



export const store = configureStore({
  reducer: {
    userLoginInfo: userSlice,
    activeChat: activeChatSlice

  }
});

export default store;