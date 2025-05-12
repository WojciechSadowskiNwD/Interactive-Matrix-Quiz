import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstLaunch: true,
	isVisible: false,
    activeComponent: "options",
	status: "quizScreen",
	// "startScreen", "quizScreen", "finishScreen"
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
			//app screen
        },
		changeStatus: (state, action) => {
			state.status = action.payload;
			//quiz screen
		}
	},
});


export const { isFirstLaunch, itIsVisible, changeActiveComponent, changeStatus } = uiSlice.actions;
export default uiSlice.reducer;