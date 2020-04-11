import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles/navbar.css"
class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<h1 className="logo">T-Code</h1>
				<ul className="nav">
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/services">SERVICES</Link>
					</li>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
					<li>
						<Link to="/contact">CONTACT</Link>
					</li>
				</ul>
				{/* <span className="fa fa-bars menu-icon"></span> */}
			</div>
		)
	}
}

export default Navbar;