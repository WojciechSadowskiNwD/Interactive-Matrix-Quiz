import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstLaunch: true,
	isVisible: false,
    activeComponent: "options",
	status: "startScreen",
	// "startScreen", "quizScreen", "finishScreen"
	secondsRemaining: 430,  //for timer quiz
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
			console.log(state.status);
			//quiz screen
		},
		countdown:  (state) => {
			state.secondsRemaining = state.secondsRemaining - 1;
			if(state.secondsRemaining === 0){
				state.status = "finishScreen";
			}
		}
	},
});


export const { isFirstLaunch, itIsVisible, changeActiveComponent, changeStatus, countdown } = uiSlice.actions;
export default uiSlice.reducer;