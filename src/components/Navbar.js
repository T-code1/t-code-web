import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles/navbar.css"
class Navbar extends Component {
	render() {
	//  scrollToTop =()=>{
	// 		scroll.scrollToTop();
	// 	}
		return (
       	<div className="Navbar">
		<h1 className="logo" /*onClick={this.scrollToTop}*/>T-Code</h1>
          <ul className="nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
            </li>
			<li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
			<li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
		)
	}
}

export default Navbar;