import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
      <div className="app">
       {/* list of components */}
       <Navbar/>
       <Home/>
       <Services />
       <About/>
       <Contact/>

      </div>
    );
  }
}

export default App;
