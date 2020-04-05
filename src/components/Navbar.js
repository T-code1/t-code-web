import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles/navbar.css"
class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<h1 className="logo">T-CODE</h1>
				<ul className="nav">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/services">Services</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Navbar;