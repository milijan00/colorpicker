import { createSlice } from "@reduxjs/toolkit";

function onSearch(state){
	if(state.search){
		state.searchResult = state.palettes.filter(x => x.name.includes(state.search));
	}else {
		state.searchResult = state.palettes;
	}
}
const palettesSlice = createSlice({
	name : "palettes",
	initialState : {
		paletteName : "",
		editPalette : false,
		search : "",
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
		searchResult : [
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
		colorInputs : [] 

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
				onSearch(state);
				state.selected = state.palettes[index];
			}

		},
		onUpdatePaletteName(state, action){
			if(action.payload.value){
				const index = state.palettes.findIndex(x => x.name === action.payload.name);
				state.palettes[index].name = action.payload.value;
				onSearch(state);
				state.selected = state.palettes[index];
			}
		},
		onSearch,
		onSearchValueChange(state, action){
			state.search = action.payload;
		}
	}
});

export const palettesReducer = palettesSlice.reducer;
export const palettesActions = palettesSlice.actions;
