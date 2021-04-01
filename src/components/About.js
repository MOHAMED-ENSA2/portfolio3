import React, { Component } from 'react';
import './About.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="about">
                <img  className="profile-img" src="./images/beautiful.jpg" alt="not found"/>
                <div className="me">
                    <h1>à mon propos</h1>
                    <p>Bonjour, je suis Mohamed El Meziani</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati dolorem voluptas atque blanditiis eum ducimus similique quos fugiat optio necessitatibus dolorum tempora amet fugit, explicabo unde a. Quos, consequatur.</p>
                    <button className="info">PLUS DE DETAIL</button>

                    <button className="cv-btn2">TELECHARGER CV</button>
                </div>
            </div>
         );
    }
}
 
export default About;