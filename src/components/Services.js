import React, { Component } from 'react';
import { Card, CardBody } from 'react-simple-card';
// import background from '../images/page3.jpg';
import "./styles/home.css";
const GREY = "#D4D4D4";
const regular = "../fonts/ProximaNovaSoft-Regular.otf"
class Services extends Component {
    render() {
        const services = {
            flex: 1
        },
            title = {
                color: "#232323",
                textAlign: 'center',
                padding: 2
            },
            subtitle = {
                textAlign: 'center',
            },

            cardOne = {
                width: 266,
                height: 300,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: `1px 1px 1px ${GREY}`,
                borderRadius: 4,
                borderColor: "#EEEE",
                fontFamily: 'regular'
            },

            image = {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 28,
                width: 181,
                height: 150,
                borderRadius: 2.5
            },

            cards = {
                display: 'flex',
            },

            first = {
                fontSize: 14,
                marginTop: 5,
                marginLeft: 40,
                color: '#707070',
                fontWeight: 'bold'
            },
            web = {
                fontSize: 14,
                marginTop: 5,
                marginLeft: 80,
                color: '#707070',
                fontWeight: 'bold'
            },

            second = {
                fontSize: 13,
                textAlign: 'center',
                color: '#707070',
                marginTop: 10
            },

            we = {
                backgroundImage: 'url(' + require('../images/mac.jpeg') + ')',
                backgroundSize: 'cover',
                position: 'relative',
                height: 220,
                fontSize: 25,
                textAlign: 'center',
                color: '#707070',
                marginTop: 100
            },

            weare = {
                color: '#fff',
                paddingTop: 55,
                paddingRight: 120,
                fontFamily: 'regular'
            },

            paragraph = {
                color: '#fff'
            }

        return (
            <div style={services} className="services" >
                <h2 style={title}>Services</h2>
                <h3 style={subtitle}>What we do</h3>
                <div style={cards} className="cards">

                    <Card style={cardOne}>
                        <img className="image" src={require("../images/mobile-app-development.png")} alt="pexels" style={image} />
                        <CardBody><p style={first}>Mobile Application</p>
                            <p style={second}>We build mobile Apps with friendly design and delightful functionalities</p></CardBody>
                    </Card>

                    <Card style={cardOne}>
                        <img className="image" src={require("../images/desktop-application.jpg")} alt="pexels" style={image} />
                        <CardBody><p style={first}>DeskTop Application</p>
                            <p style={second}>Creative solutions for your problems, creativity and innovation make it possible</p></CardBody>
                    </Card>

                    <Card style={cardOne}>
                        <img className="image" src={require("../images/responsive-website-development.jpg")} alt="pexels" style={image} />
                        <CardBody><p style={web}>Website</p>
                            <p style={second}>All about your needs with the best interface using human-centered approach and your target audience</p></CardBody>
                    </Card>
                </div>
                <div style={we} className="we" >
                    <div style={weare} className="weare">
                        <p style={paragraph} className="paragraph">T-Code, a passionate team that takes</p>
                        <p style={paragraph} className="paragraph">  your idea into real world product</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Services;