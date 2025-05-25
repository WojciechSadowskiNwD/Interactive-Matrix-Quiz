import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstLaunch: true,
	isVisible: false,
	activeComponent: "options",
	// "startScreen", "quizScreen", "finishScreen"
	status: "startScreen",
	// status: "quizScreen",
	corrAnswers: 0,
	secondsRemaining: 430, //time in quiz
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
		},
		countdown: (state) => {
			state.secondsRemaining = state.secondsRemaining - 1;
			if (state.secondsRemaining === 0) {
				state.status = "finishScreen";
			}
		},
		setCorrAnswers: (state, action) => {
			state.corrAnswers = state.corrAnswers + action.payload;
		},
	},
});

export const {
	isFirstLaunch,
	itIsVisible,
	changeActiveComponent,
	changeStatus,
	countdown,
	setCorrAnswers,
} = uiSlice.actions;
export default uiSlice.reducer;
