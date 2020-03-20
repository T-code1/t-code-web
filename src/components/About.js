import React, { Component } from 'react';
import './Astyle.css'
import './styles/Astyle.css'

class About extends Component {
    render() {
        return (
            <div className="container">

                <div className="about">

                    <h2>About Us</h2>
                    <h3>Our everyday business</h3>

                </div>

                <div className="img">

                    <img className="image" src={require("../images/pexels-photo-248159.jpeg")} alt="pexels" />

                    <div className="paragraph">

                        <p>In a world of technology, People make difference</p>
                        <p>so you've got questions on</p>
                        <p>which app to use we've got answers:</p>
                        <p> <i className="fa fa-hand-o-right" />  Website</p>
                        <p> <i className="fa fa-hand-o-right" />  Mobile Application</p>
                        <p> <i className="fa fa-hand-o-right" />  Desktop Application</p>

                    </div>

                </div>

            </div>
        )
    }
}

export default About;