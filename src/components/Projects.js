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
            <div className = "projetcs">
            <div className =  "project-container">
                <div className = "project-text">
                    <h1>MES PROJETS</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis atque illo consectetur. Blanditiis maiores possimus culpa distinctio repellendus voluptatum accusantium, alias eius recusandae nam sint excepturi, earum beatae voluptatibus libero!</p>
                </div>
                <div className = "project">
                    <Project classname = "prjt-elm" />
                    <Project classname = "prjt-elm" />
                    <Project classname = "prjt-elm" />
                    <Project classname = "prjt-elm" />
                </div>
                <div className = "project">
                    <Project classname = "prjt-elm" />
                    <Project classname = "prjt-elm" />
                    <Project classname = "prjt-elm" />
                    <Project classname = "prjt-elm" />
                </div>
            </div>
            </div> 
        );
    }
}
 
export default Projetcs;