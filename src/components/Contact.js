import React, { Component } from 'react';
import './cstyle.css'
class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="contact">
                    <h1>Let's Chat</h1>

                    <h3>Contact Us</h3>

                    <div className="phoneNumber">

                        <div className="phone">

                            <p> <i className="fa fa-phone" /></p>
                            <p><i className="fa fa-envelope" />  </p>

                        </div>

                        <div className="number">

                            <p> +250 739 015 740</p>
                            <p id="nmber"> +250 785 846 496</p>
                            <p id="mail">tcode@gmail.com</p>

                        </div>

                        <div className="empty"></div>

                        <div className="chat">

                            <form>

                                <h4>Email*</h4>
                                <input type="text" />
                                <h4>Message*</h4>
                                <textarea placeholder="tell us about your project" />

                            </form>

                            <div className="align">

                                <button className="button">SEND</button>

                            </div>

                        </div>

                    </div>

                    <div className="hire">

                        <h3>Hire Us</h3>
                        <p>we are ready to be part</p>
                        <p>of your adventure.</p>

                    </div>

                </div>

                <footer className="footer">

                    <div className="copy">

                        <p>  &copy;  T-Code 2020. All rights reserved</p>

                        <div className="social">

                            <p> <i className="fa fa-facebook" /> </p>
                            <p> <i className="fa fa-instagram" /></p>
                            <p> <i className="fa fa-linkedin" /></p>
                            <p> <i className="fa fa-twitter" /></p>

                        </div>

                    </div>

                </footer>

            </div>

        )
    }
}

export default Contact;