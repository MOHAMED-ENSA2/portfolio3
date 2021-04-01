import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            
            <div className="nav">
                <div className="logo">
                    portfolio 
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">projets</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact </a></li>
                    </ul>
                </div>
            </div>
            
        );
    }
}
 
export default NavBar;