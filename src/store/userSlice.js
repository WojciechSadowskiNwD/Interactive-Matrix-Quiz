import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// userName: null,
	userName: "Adam154",
	// selectedAvatar: null,
	selectedAvatar: "img/avatars/avatar_zion_woman_1.webp",
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
			// console.log("wybrano avatara: ", state.selectedAvatar);
		},
	},
});

export const { setUserName, setUserAvatar } = userSlice.actions;
export default userSlice.reducer;