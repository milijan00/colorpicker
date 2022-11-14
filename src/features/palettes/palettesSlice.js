import { createSlice } from "@reduxjs/toolkit";

const palettesSlice = createSlice({
	name : "palettes",
	initialState : {
		paletteName : "",
		editPalette : false,
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
		},
		onEditPalette(state){
			state.editPalette = true;
		},
		onHideEditPaletteModal(state){
			state.editPalette = false;
		},
		onUpdatePaletteColor(state, action){
			const index = state.palettes.findIndex(x => x.name === action.payload.name);
			const colorIndex = state.palettes[index].colors.findIndex(c => c.value === action.payload.oldValue);
			if(action.payload.value){
				state.palettes[index].colors[colorIndex].value = action.payload.value;
				state.selected = state.palettes[index];
			}

		},
		onUpdatePaletteName(state, action){
			const index = state.palettes.findIndex(x => x.name === action.payload.name);
			if(action.payload.value){
				state.palettes[index].name = action.payload.value;
				state.selected = state.palettes[index];
			}
		}
	}
});

export const palettesReducer = palettesSlice.reducer;
export const palettesActions = palettesSlice.actions;
