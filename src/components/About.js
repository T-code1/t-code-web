import React, { Component } from 'react';
import './styles/Astyle.css'
class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="contain">
                    <div className="about">
                        <h2>About Us</h2>
                        <h3>Our everyday business</h3>
                    </div>
                    <div className="img">

                        <img className="image" src={require("../images/placeholder.png")} alt="pexels" />

                        <div className="paragraph">

                            <p className="text" >In a world of technology, People make difference</p>
                            <p className="text">so you've got questions on</p>
                            <p className="text">which app to use we've got answers:</p>
                            <p className="work"> <i className="fa fa-hand-o-right" />  Website</p>
                            <p className="work"> <i className="fa fa-hand-o-right" />  Mobile Application</p>
                            <p className="work"> <i className="fa fa-hand-o-right" />  Desktop Application</p>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About;