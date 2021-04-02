import React, { Component } from 'react';
import './ContCard.css'

class ContCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className ="contcard">
             <i className = "i" class={this.props.icon}></i>
             <h5 className  ="h">{this.props.nom}</h5>
             <p className = "p">{this.props.info}</p>

            </div>
        );
    }
}
 
export default ContCard;