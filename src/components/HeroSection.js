import React, { Component } from 'react';
import './HeroSection.css'

class HeroSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
            <div className="hero">
             <div className = 'hero-text'>
             <h2>Bienvenue</h2>
                <h1>Je suis developpeur web</h1>
                <p>
                    reprehenderit atque cum aliquid dolorem omnis ab deserunt voluptatum veniam nisi magni ex, recusandae nobis quos, debitis architecto obcaecati laborum?
                </p>

                <button className = "cv-btn">TELECHARGER CV </button>
                <button className = "hire-btn">M'EMBAUCHER</button>
             </div>
                

            </div>

        );
    }
}
 
export default HeroSection;