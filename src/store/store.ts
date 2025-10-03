import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import cursorReducer from "./cursorSlice";
import userReducer from "./userSlice";


export const store = configureStore({
    reducer: { 
        ui: uiReducer,
        cursor: cursorReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;