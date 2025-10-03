import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// aliases unions
type ActiveComponent = "options" | "scoreBoard" | "aboutApp" | "aboutDev";
type Status = "startScreen" | "quizScreen" | "finishScreen";

// init state type
type UiState = {
	firstLaunch: boolean;
	isVisible: boolean;
	activeComponent: ActiveComponent;
	status: Status;
	corrAnswers: number;
	secondsRemaining: number;
};

const initialState: UiState = {
	firstLaunch: true,
	isVisible: false,
	activeComponent: "options",
	status: "startScreen",
	corrAnswers: 0,
	secondsRemaining: 430, //time in quiz
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		isFirstLaunch: (state, action: PayloadAction<boolean>) => {
			state.firstLaunch = action.payload;
		},
		itIsVisible: (state, action: PayloadAction<boolean>) => {
			state.isVisible = action.payload;
		},
		changeActiveComponent: (state, action: PayloadAction<ActiveComponent>) => {
			state.activeComponent = action.payload;
			//app screen
		},
		changeStatus: (
			state,
			action: PayloadAction<Status>
		) => {
			state.status = action.payload;
			//quiz screen
		},
		countdown: (state) => {
			state.secondsRemaining = state.secondsRemaining - 1;
			if (state.secondsRemaining === 0) {
				state.status = "finishScreen";
			}
		},
		setCorrAnswers: (state, action: PayloadAction<number>) => {
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