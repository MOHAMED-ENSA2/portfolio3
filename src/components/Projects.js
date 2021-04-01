import React, { Component } from 'react';
import Project from './Project';
import './Projects.css'

class Projetcs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className = "project">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            </div>
        );
    }
}
 
export default Projetcs;