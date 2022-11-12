import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { homeActions } from "./homeSlice";

export default function Home(){
	const randomColor = useSelector(state=> state.home.randomColor);
	const pickedColor = useSelector(state=>state.home.pickedColor);
	const dispatch = useDispatch();
	return (
		<section className="container mx-auto py-3 vh90">
			<article className="mb-3">
				<h3>Choose a color:</h3>
			</article>
			<article>
				<form name="pickColorForm" method="POST" action="#">
					<article className="mb-3">
						<input type="color" className="form-control " id="colorpicker" onChange={(e)=>{dispatch(homeActions.colorChanged(e.target.value))}} />
					</article>
					<article className="mb-3" >
						<h1>Picked color value: {pickedColor}</h1>
					</article>
				</form>
			</article>
			<article>
				<h3>Generate a random color:</h3>
			</article>
			<article>
				<form method="POST" name="randomColorForm" action="#">
					<section className="row ">
						<article className="col-8 col-md-11">
							<div className="rounded-border bar" style={{backgroundColor:randomColor}}></div>
						</article>
						<article className="col-3 col-md-1">
							<input type="button" value="Generate" className="btn btn-primary" onClick={(e)=>{dispatch(homeActions.onGenerateButtonClicked())}} />
						</article>
						<article className="col-12">
							<h3>Random color value: {randomColor}</h3>
						</article>
					</section>
				</form>
			</article>
		</section>
	);
}