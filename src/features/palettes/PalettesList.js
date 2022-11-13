import React from "react";

export default function PalettesList(props){
	return (
		<section className="row justify-content-between py-2">
			{props.palettes.map((el, index)=>{
				return (
					<section className="col-12 col-md-3 palette mb-3" key={index}>
						<article>
							<h3>{el.name}</h3>
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