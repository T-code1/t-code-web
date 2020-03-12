import React, { Component } from 'react';
import Sample from "./components/sample";
class App extends Component {
  render() { 
    return ( 
      <div className="app">
       {/* THIS WHERE WE ARE GOING TO CALL OUR COMPONENTS */}
       <Sample/>
      </div>
     );
  }
}
 
export default App;
