import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import cursorReducer from "./cursorSlice";


const store = configureStore({
    reducer: {
        ui: uiReducer,
        cursor: cursorReducer,
    }
})

export default store;