import React, { Component } from 'react';
import "./styles/home.css";

class Home extends Component {
    render() {
        const {id} =this.props
        return (
            <div className="home" id={id}>
                <img className="home-img" src={require("../images/3847de7b-b22d-4fe9-8bd6-b4ae846d78df.JPG")} alt="coding" />
                <h1 className='text'>Innovation Through  </h1>
                <h1 className='text2'>Strategy,Design & Technology </h1>
            </div>
        )
    }
}

export default Home; 