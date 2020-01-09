import React, { Component } from 'react'
import Entete from '../components/Entete'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                 <Entete/>
               <h3>Suivez l'etat de vos annonces</h3> 
            </div>
        );
    }
}
