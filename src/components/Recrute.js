import React, { Component } from 'react';
import './Recrute.css'

class Recrute extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className = "recrute">
                <h1>    Laissez nous travailler ensemble</h1>
                <h3>Je suis valable pour travailler sur vos projet, recruter moi et  finir votre projet plus rapidement </h3>
                <button className="hire-me">M'EMBAUCHER</button>
            </div>
         );
    }
}
 
export default Recrute;