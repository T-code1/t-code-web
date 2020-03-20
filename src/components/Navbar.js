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
					<a href="!#">HOME</a>
				</li>
				<li>
					<a href="/register">SERVICES</a>
				</li>
				<li>
					<a href="/login">ABOUT</a>
				</li>
				<li>
					<a href="/login">CONTACT</a>
					<Link to="/home">HOME</Link>
				</li>
				<li>
					<Link to="/services">SERVICES</Link>
				</li>
				<li>
					<Link to="/about">ABOUT</Link>
				</li>
				<li>
                <li>
					<Link to="/contact">CONTACT</Link>
				</li>
			</ul>
            </div >
        )
	}
}

export default Navbar;