import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';

const store = configureStore({
    reducer: {
        userSlice: userSlice,
    },
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(baseAPi.middleware)
});

export default store;