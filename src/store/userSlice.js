import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	
	// userName: null,
	// selectedAvatar: null,
	// currentScore: 0,
	
	userName: "Gregoria021",
	selectedAvatar: "img/avatars/avatar_4.webp",
	currentScore: 710,
	

	bonusActive: false,
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
		setBonusActive: (state, action) => {
			state.bonusActive = action.payload;
		}
	},
});

export const { setUserName, setUserAvatar, setCurrentScore, setBonusActive } =
	userSlice.actions;
export default userSlice.reducer;
