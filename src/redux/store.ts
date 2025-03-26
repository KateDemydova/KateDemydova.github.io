import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './userSlice';
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export const useAppDispatch = () => useDispatch<AppDispatch>;

export  type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
