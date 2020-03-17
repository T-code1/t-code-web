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
<<<<<<< HEAD
        {/* list of components */}

        <Services />

=======
       {/* list of components */}
       <Navbar/>
       <Home/>
       <Services />
       <About/>
       <Contact/>
>>>>>>> 1cd063380ae91d0e68bad47d919818cdb22e8a34
      </div>
    );
  }
}

export default App;
