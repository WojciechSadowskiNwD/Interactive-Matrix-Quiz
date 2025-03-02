import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeCursor: false,
	position: { x: typeof window !== "undefined" ? window.innerWidth / 2 + 200 : 400, 
        y: typeof window !== "undefined" ? window.innerHeight / 2 + 200 : 300 },
	isHoveringBtn: false,
};  

const cursorSlice = createSlice({
	name: "cursor",
	initialState,
	reducers: {
		toggleActive: (state) => {
            state.activeCursor = !state.activeCursor;
		},
		changePosition: (state, action) => {
			state.position = action.payload;
		},
		toggleHoveringOnBtn: (state, action) => {
			state.isHoveringBtn = action.payload;
		},
	},
});

export const {
	toggleActive,
	changePosition,
	toggleHoveringOnBtn,
} = cursorSlice.actions;
export default cursorSlice.reducer;