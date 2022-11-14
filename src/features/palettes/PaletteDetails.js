import React from "react";
import { useSelector } from "react-redux";

export default function PaletteDetails(){
	const selectedPalette = useSelector(state=> state.palettes.selected);

	return (
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
		</section>
	);
}