import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstLaunch: true,
	isVisible: false,
    activeComponent: "options",
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		isFirstLaunch: (state, action) => {
			state.firstLaunch = action.payload;
		},
		itIsVisible: (state, action) => {
			state.isVisible = action.payload;
		},
        changeActiveComponent: (state, action) => {
            state.activeComponent = action.payload;
        }
	},
});


export const { isFirstLaunch, itIsVisible, changeActiveComponent } = uiSlice.actions;
export default uiSlice.reducer;