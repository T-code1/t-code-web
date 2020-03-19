import React, { Component } from 'react';
//import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
//import { Image } from 'react'
// import Card, {
//     CardPrimaryContent,
//     CardMedia,
//     CardActions,
//     CardActionButtons,
//     CardActionIcons
// } from "@material/react-card";
import { Card, CardBody,ImageHeader } from 'react-simple-card';

class Services extends Component {
    render() {
        const services = {
            flex: 1
        },
            title = {
                color: "#232323",
                textAlign: 'center',
                fontSize: 40,
                fontFamily: 'opensans'

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
                //width: 50 
            },
            image = {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 271,
                height: 281
            },
            cards = {
                //backgroundColor : 'yellow',
                display: 'flex',
                //flexDirection : 'row'
            },
            first = {
                fontSize: 14,
                marginTop: -85,
                marginLeft: 60,
                color: '#707070',
                fontFamily: 'opensans',
                fontWeight: 'bold'
            },
            second = {
                fontSize: 12,
                textAlign: 'center',
                color: '#707070',
                fontFamily: 'opensans',
                marginTop: 30
            }

        return (
            <div style={services} className="services" >
                <h1 style={title}>Services</h1>
                <h4 style={subtitle}>What we do</h4>
                <div style={cards} className="cards">

                    <Card style={cardOne}>
                        <ImageHeader imageSrc="https://mommybrown.com/news/wp-content/uploads/2013/06/coding.jpg" style={image} />
                        <CardBody><p style={first}>Mobile Application</p>
                        <p style={second}>We build mobile Apps with friendly design and delightful functionalities</p></CardBody>
                    </Card>

                    <Card style={cardOne}>
                        <ImageHeader imageSrc="https://s3.amazonaws.com/iwaria%2Fprod%2Fthumbs/1508361435964.2.jpeg" style={image} />
                        <CardBody><p style={first}>DeskTop Application</p>
                        <p style={second}>Creative solutions for your problems, creativity and innovation make it possible</p></CardBody>
                    </Card>

                    <Card style={cardOne}>
                        <ImageHeader imageSrc="https://iwaria.s3.amazonaws.com/prod/thumbs/1542579473946.422.jpeg" style={image} />
                        <CardBody><p style={first}>Mobile Application</p>
                        <p style={second}>All about your needs with the best interfce using human-centered approach and your target audience</p></CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Services;