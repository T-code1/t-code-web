import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
       {/* list of components */}
       <Navbar/>
       <Home/>
       <Services />
       <About/>
       <Contact/>
      </div>
  <Router>
      <Fragment>
      <Navbar />
      <Switch>
      <Route exact path = "/home" component = {Home} />
      <Route exact path = "/services" component = {Services} />
      <Route exact path = "/about" component = {About} />
       <Route exact path = "/contact" component = {Contact} />
      </Switch>
      <Services/>
      <About/>
      <Contact />
      </Fragment>
  </Router>
    );
  }
}

export default App;
