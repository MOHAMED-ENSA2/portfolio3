import React, { Component } from 'react';
import ContCard from './ContCard';
import './Contact.css'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contact">
                <div className = "contact-container">

                <div className = "en-tete">
                <h1>CONTACTER NOUS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum ad, laudantium veniam dolorem asperiores, accusantium nulla iste deserunt non natus veritatis fugit suscipit quis accusamus temporibus voluptas sed. Veritatis?</p>
                </div>
                <div className="email-form">
                    <h2>Envoyer nous un mail</h2>
                    <form action="">
                        <input  className = "nom" type="text" placeholder = "Votre nom"/> 
                        <input className = "email"  type="text" placeholder = " E-mail"/> <br/>
                        <input   className = "sujet" type="text" placeholder = "Sujet"/> <br/>
                        <textarea className = "message"  name="" id=""  rows="5"> Votre message</textarea> <br/>
                        <input className ="envoyer" type="submit" placeholder = "envoyer"/>
                    </form>
                </div>
                <div className="contact-infos">
                    <h2>Contacter moi</h2>
                    <p>je m'en fou, j'en ai marre ac bj cdb sdcs dscds enim dicta pariatur harum dolor beatae repellendus! Asperiores.</p>
                    <ContCard icon = "fa fa-location-arrow"  nom = "Location" info = "xxx, yyy,zz"> </ContCard>
                    <ContCard icon = "fa fa-phone"  nom = "appel" info = "0762357814"> </ContCard>
                    <ContCard icon = "fa fa-envelope"  nom = "E-mail" info = "xxx@xxx.com"> </ContCard>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;