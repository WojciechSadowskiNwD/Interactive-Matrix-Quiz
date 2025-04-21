import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import cursorReducer from "./cursorSlice";
import userReducer from "./userSlice";


const store = configureStore({
    reducer: {
        ui: uiReducer,
        cursor: cursorReducer,
        user: userReducer,
    }
})

export default store;