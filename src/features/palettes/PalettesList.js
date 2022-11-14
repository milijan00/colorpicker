import React from "react";
import { useDispatch } from "react-redux";
import { palettesActions } from "./palettesSlice";
export default function PalettesList(props){
	const dispatch = useDispatch();
	return (
		<section className="row justify-content-between py-2 col-12 col-md-8">
			{props.palettes.map((el, index)=>{
				return (
					<section className="col-12 col-md-3 palette mb-3" key={index}>
						<article>
							<h3 onClick={(e)=>{ dispatch(palettesActions.onPaletteSelected(index))}} className="pointer-cursor">{el.name} <span className="btn btn-danger" onClick={(e)=> dispatch(palettesActions.onDeletePalette(index))}>&times;</span></h3>
						</article>
						<section className="w-100 py-1">
							{el.colors.map((c, i)=>{
							return <div className="rounded-border bar" key={i} style={{backgroundColor:c.value}}></div>
							})}
						</section>
					</section>
				);
			})}
		</section>
	);
}