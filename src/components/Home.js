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
                <h1 className='text'>Innovation Through  </h1>
                <h1 className='text2'>Strategy,Design & Technology </h1>
               <div className="tools">
               <img className="adobe" src={require("../images/logo-xd.png")} alt="coding" />
                <img className="figma" src={require("../images/logo-figma.png")} alt="coding" />
               <img className="js" src={require("../images/js.png")} alt="coding" />
               <img className="react" src={require("../images/logo-react.png")} alt="coding" />
               <img className="css" src={require("../images/css.jpg")} alt="coding" />
               <img className="html" src={require("../images/htmlcss.png")} alt="coding" />
               <img className="node" src={require("../images/node.png")} alt="coding" />
                <img className="mongodb" src={require("../images/mongodb.png")} alt="coding" />


               </div>
                <Services />
                <About />
                <Contact />
            </div>
        )
    }
}

export default Home; 