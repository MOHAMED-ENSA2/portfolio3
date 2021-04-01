import React, { Component } from 'react';

import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Projetcs from './components/Projects';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Projetcs/>
      </>
     );
  }
}
 
export default App;
