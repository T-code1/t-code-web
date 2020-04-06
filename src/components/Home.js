import React, { Component } from 'react';
import "./styles/home.css";
import Services from "./Services.js";
import About from "./About";
import Contact from "./Contact"
class Home extends Component {
    render() {
        // const imageUrl = "https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg";
        return (
            <div className="home">
                <img className="home-img" src={require("../images/3847de7b-b22d-4fe9-8bd6-b4ae846d78df.JPG")} alt="coding" />
                <h1 className='text'>Innovation Through Strategy </h1>
                <h1 className='text2'>Design & Technology </h1>
                <Services />
                <About />
                <Contact />
            </div>
        )
    }
}

export default Home;