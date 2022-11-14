import { createSlice } from "@reduxjs/toolkit";

const palettesSlice = createSlice({
	name : "palettes",
	initialState : {
		paletteName : "",
		palettes : [
			{
				name : "Palette1",
				colors : [
					{
						value : "#ff0000"
					},
					{
						value : "#00ff00"
					},
					{
						value : "#0000ff"
					}
				]
			}
		],
		selected : null,
		colorInputs : [] // inputs of type color will be added here

	},
	reducers :{
		onAddNewInput(state){
			state.colorInputs.push({
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
		},
		onDeletePalette(state, action){
			state.palettes.splice(action.payload, 1);
		},
		onPaletteSelected(state, action){
			state.selected = state.palettes[action.payload];
		}
	}
});

export const palettesReducer = palettesSlice.reducer;
export const palettesActions = palettesSlice.actions;
