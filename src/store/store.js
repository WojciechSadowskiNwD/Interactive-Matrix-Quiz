import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";


const store = configureStore({
    reducer: {
        // cursor: cursorReducer,
        ui: uiReducer,
    }
})

export default store;