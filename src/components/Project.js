import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className = {this.props.classname}>
                <i class="fas fa-code"></i>
                <h2>titre de projet</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt deserunt ducimus, sint delectus quos voluptatum sapiente consequuntur necessitatibus, in itaque tempora sunt tenetur autem accusantium optio, commodi recusandae eveniet veniam!</p>
            </div>
            
         );
    }
}
 
export default Project;