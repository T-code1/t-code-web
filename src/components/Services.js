import React, { Component } from 'react';
import { Card, CardBody } from 'react-simple-card';
// import background from '../images/page3.jpg';
import "./styles/home.css";

class Services extends Component {
    render() {
        const services = {
            flex: 1
        },
            title = {
                color: "#232323",
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'opensans',
                padding: 3
            },
            subtitle = {
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'opensans'
            },
            cardOne = {
                width: 271,
                height: 300,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: 6,
                //borderRadius: 12
                //width: 50 
            },
            image = {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 35,
                width: 200,
                height: 181
            },
            cards = {
                
                //backgroundColor : 'yellow',
                display: 'flex',
                //flexDirection : 'row'
            },
            first = {
                fontSize: 14,
                marginTop: -15,
                marginLeft: 60,
                color: '#707070',
                fontFamily: 'opensans',
                fontWeight: 'bold'
            },
            second = {
                fontSize: 14,
                textAlign: 'center',
                color: '#707070',
                fontFamily: 'opensans',
                marginTop: 10
            },
            we = {
                backgroundImage: 'url(' + require('../images/page7.jpg') + ')',
                position: 'relative',
                height: 160,
                //width: 100,
                fontSize: 20,
                textAlign: 'center',
                color: '#707070',
                fontFamily: 'opensans',
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            weare ={
                textAlign: 'center',
                fontFamily: 'opensans',
                padding: 60,
                color: 'white'
            }

        return (
            <div style={services} className="services" >
                <h1 style={title}>Services</h1>
                <h4 style={subtitle}>What we do</h4>
                <div style={cards} className="cards">

                    <Card style={cardOne}>
                        <img className="image" src={require("../images/afcomp.jpeg")} alt="pexels" style={image} />
                        <CardBody><p style={first}>Mobile Application</p>
                            <p style={second}>We build mobile Apps with friendly design and delightful functionalities</p></CardBody>
                    </Card>

                    <Card style={cardOne}>
                        <img className="image" src={require("../images/code.jpeg")} alt="pexels" style={image} />
                        <CardBody><p style={first}>DeskTop Application</p>
                            <p style={second}>Creative solutions for your problems, creativity and innovation make it possible</p></CardBody>
                    </Card>

                    <Card style={cardOne}>
                        <img className="image" src={require("../images/pexels-photo-248159.jpeg")} alt="pexels" style={image} />
                        <CardBody><p style={first}>Mobile Application</p>
                            <p style={second}>All about your needs with the best interfce using human-centered approach and your target audience</p></CardBody>
                    </Card>
                </div>
                <div style={we} className="we" >
                    <p style={weare} className="weare">T-code, a passionate team that takes your idea into real world product</p>
                </div>
            </div>
        )
    }
}

export default Services;