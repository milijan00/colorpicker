import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	links: [
		{
			name : "Home",
			path: "/"
		},
		{
			name : "Palettes",
			path: "/palettes"
		}
	]
};

const navigationSlice = createSlice({
	name : "navigation",
	initialState,
	reducers : {

	}
});

export const navigationReducer = navigationSlice.reducer;
export const navigationLinksSelector = state => state.links;
