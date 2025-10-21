import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
	userName: string | null;
	selectedAvatar: string | null;
	currentScore: number;
	bonusActive: boolean;
};

const initialState: UserState = {
	userName: null,
	selectedAvatar: null,
	currentScore: 0,
	// userName: "Andy_001",
	// selectedAvatar: "img/avatars/avatar_4.webp",
	// currentScore: 320,
	bonusActive: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.userName = action.payload;
		},
		setUserAvatar: (state, action: PayloadAction<string>) => {
			state.selectedAvatar = action.payload;
		},
		// zmienic na increaseScore
		setCurrentScore: (state, action: PayloadAction<number>) => {
			state.currentScore = state.currentScore + action.payload;
		},
		setBonusActive: (state, action: PayloadAction<boolean>) => {
			state.bonusActive = action.payload;
		},
		resetSettings: () => initialState,
	},
});

export const {
	setUserName,
	setUserAvatar,
	setCurrentScore,
	setBonusActive,
	resetSettings,
} = userSlice.actions;
export default userSlice.reducer;
