import React, { Component } from 'react';
import "./styles/home.css";
class Home extends Component {
    render(){
        const imageUrl = "https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg"
        return (
            <div className = "home">
            <img className="home-img" src= {imageUrl} alt= "coding" />
            <h1 className='text'>Innovation Through Strategy,<br/>Design & Technology </h1>
            </div>
        )
    }
}
 
export default Home;