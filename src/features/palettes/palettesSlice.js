import { createSlice } from "@reduxjs/toolkit";

const palettesSlice = createSlice({
	name : "palettes",
	initialState : {
		paletteName : "",
		palettes : [],
		colors :[], // values of color inputs will be here
		colorInputs : [] // inputs of type color will be added here

	},
	reducers :{
		onAddNewInput(state){
			state.colorInputs.push({
				id : "input" + state.colorInputs.length+1,
				value : "#000000"
			});

		},
		onInputColorValueChange(state, action){
			state.colorInputs[action.payload.index].value = action.payload.value;
		},
		onSubmit(state, action){
			if(state.paletteName && state.colorInputs.length > 0){
				state.palettes.push ({ name : state.paletteName, colors :  state.colorInputs})	;
				state.colorInputs = [];
				state.paletteName = "";
			}
		},
		onPaletteTitleChange(state, action){
			state.paletteName = action.payload;
		}
	}
});

export const palettesReducer = palettesSlice.reducer;
export const palettesActions = palettesSlice.actions;
