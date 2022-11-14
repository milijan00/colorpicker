import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { palettesActions } from "./palettesSlice";
import PalettesList from "./PalettesList";
import PaletteDetails from "./PaletteDetails";
export default function Palettes(){
	const dispatch = useDispatch();
	const palettes = useSelector(state => state.palettes.palettes);
	const selected = useSelector(state => state.palettes.selected);
	const colorInputs = useSelector(state => state.palettes.colorInputs);
	const paletteName = useSelector(state => state.palettes.paletteName);
	return (
		<section className="container mx-auto py-3 vh90">
			<section >
				<form name="createPaletteForm" method="POST" action="#" onSubmit={(e)=>{e.preventDefault(); dispatch(palettesActions.onSubmit())}}>
					<article>
						<h3>Palette title </h3>
					</article>
					<article className="mb-3">
						<input type="text" placeholder="Palette title" className="form-control"  value={paletteName} onChange={(e)=> dispatch(palettesActions.onPaletteTitleChange(e.target.value))}/>
					</article>
					<article>
						<h3>Colors <input type="button" value="Add color" className="btn btn-primary" onClick={(e)=>dispatch(palettesActions.onAddNewInput())} /></h3>
					</article>
					<section className="row">
						{colorInputs.map((el, index)=>{
							return (
							<article className="col-12 mb-3" key={index}>
								<input type="color" className="form-control" id={el.id} onChange={(e)=>{dispatch(palettesActions.onInputColorValueChange({index : index,  value: e.target.value}))}}/>	
							</article>
							);
						})}	
						{colorInputs.length > 0 && <article>
							<input type="submit" className="btn btn-primary" value="Create palette"/>
						</article>}
					</section>
					
				</form>
			</section>
			<section className="row">
				{palettes.length ? <><PalettesList palettes={palettes}/> {selected != null && <PaletteDetails/>} </>: <h1>There are no palettes at the moment.</h1>}
			</section>
		</section>
	);
}