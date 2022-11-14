import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { palettesActions } from "./palettesSlice";
export default function EditPalette(props){
	const selected = useSelector(state => state.palettes.selected);
	const dispatch = useDispatch();
	return (
		<section id="modal" className="container-fluid d-flex align-items-center">
			<section className="container mx-auto bg-white py-3">
				<article>
					<h3>Edit a palette <span className="btn btn-danger" onClick={(e)=>{ dispatch(palettesActions.onHideEditPaletteModal())}}>&times;</span></h3>
				</article>
				<section>
					<form method="POST" action="#" name="editPaletteForm">
						<article>
							<input type="text" placeholder="Palette name" value={selected.name} onChange={(e)=>{ dispatch(palettesActions.onUpdatePaletteName({value: e.target.value, name: selected.name}))}} className="form-control"/>
						</article>
						{selected.colors.map((el, index)=>{
							return (
								<article key={index}>
									<input 
									type="color"
									className="form-control"
									value={el.value}
									onChange={(e)=>{dispatch(palettesActions.onUpdatePaletteColor({name: selected.name, oldValue: el.value, value: e.target.value}))}}
									/>
								</article>
							);
						})}
					</form>
				</section>
			</section>	
		</section>
	);
}