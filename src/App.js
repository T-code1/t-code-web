import React, { Component,Fragment } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
  <Fragment>
    <Navbar/>
    <Home id="section1"/>
    <Services id="section2" />
    <About id="section3"/>
    <Contact id="section4"/>
  </Fragment>
    );
  }
}

export default App;