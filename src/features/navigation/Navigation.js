import React from "react";
import { navigationLinksSelector } from "./navigationSlice";
import { useSelector } from "react-redux";
export default function Navigation(props){
	const navLinks = useSelector(state => state.navigation.links);
	return(
		<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
		{navLinks.map((el, index)=>{
			return (
				<li className="nav-item" key={index}>
					<a className="nav-link active" aria-current="page" href={el.path}>{el.name}</a>
				</li>
			);
		})}
      </ul>
    </div>
  </div>
</nav>
	);
}