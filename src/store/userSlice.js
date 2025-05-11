import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// userName: null,
	userName: "Adam154",
	// selectedAvatar: null,
	selectedAvatar: "img/avatars/avatar_zion_woman_1.webp",
	currentScore: 0,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserName: (state, action) => {
			state.userName = action.payload;
		},
		setUserAvatar: (state, action) => {
			state.selectedAvatar = action.payload;
		},
		setCurrentScore: (state, action) => {
			state.currentScore = state.currentScore + action.payload;
		},
	},
});

export const { setUserName, setUserAvatar, setCurrentScore } =
	userSlice.actions;
export default userSlice.reducer;
