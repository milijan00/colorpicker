import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
	name : "home",
	initialState : {
		randomColor : "#ffffff",
		pickedColor: ""
	},
	reducers : {
		colorChanged(state, action){
			state.pickedColor = action.payload;
		},
		onGenerateButtonClicked(state){
			state.randomColor = getColorHex();
		}
	}
});

export const homeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;

function getRandomHex(){
	const number =  Math.floor(Math.random() * 10) + 5;
	switch(number){
		case 10: return "a";
		case 11 : return "b";
		case 12 : return "c";
		case 13 : return "d";
		case 14 : return "e";
		case 15: return "f";
		default : return number;
	}
}

function getColorHex(){
	let color = "#";
	for(let i = 0; i < 6; i++){
		color += getRandomHex();
	}
	return color;
}