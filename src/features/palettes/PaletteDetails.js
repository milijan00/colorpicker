import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { palettesActions } from "./palettesSlice";
import EditPalette from "./EditPalette";

export default function PaletteDetails(){
	const selectedPalette = useSelector(state=> state.palettes.selected);
	const editPalette =  useSelector(state => state.palettes.editPalette);
	const dispatch = useDispatch();
	return (
		<>
		<section className="col-12 col-md-4">
			<article>
				<h3>Palette: {selectedPalette.name}</h3>
			</article>
			<section>
				{selectedPalette.colors.map((el, index)=>{
					return (<article key={index}>
						<h4>{el.value}</h4>
					</article>);
				})}
			</section>
			<article>
				<a href="#" className="btn btn-primary" onClick={(e)=>{e.preventDefault(); dispatch(palettesActions.onEditPalette())}}>Edit</a>
			</article>
		</section>
		{editPalette && <EditPalette/>}
		</>
	);
}