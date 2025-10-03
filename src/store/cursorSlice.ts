import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Position = {
	x: number;
	y: number;
}

type CursorStore = {
	activeCursor: boolean;
	position: Position;
	isHoveringBtn: boolean;
}

const initialState: CursorStore = {
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
		changePosition: (state, action: PayloadAction<Position>) => {
			state.position = action.payload;
		},
		toggleHoveringOnBtn: (state, action:PayloadAction<boolean>) => {
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