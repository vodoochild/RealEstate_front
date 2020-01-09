import React, { Component } from 'react'
import Ad from '../components/Ad'
import styles from './Ads.module.css'
import Entete from '../components/Entete'


export default class NewAd extends Component {
    render() {
        return (
            <div>
                <Entete/>
        <div className={styles.Ads}><Ad/></div>
        </div>
        
        );
    }
}
