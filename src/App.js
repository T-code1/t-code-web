import React, { Component } from 'react';
import Sample from "./components/sample";
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

        <Services />

      </div>
    );
  }
}

export default App;
