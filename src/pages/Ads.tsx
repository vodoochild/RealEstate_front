import React, { Component } from 'react'
import ViewAd from '../components/ViewAd'
import { Title } from 'react-bootstrap/lib/Modal'
import styles from './Ads.module.css'
interface Props{
    
}
export default class Ads extends Component<Props> {
    render() {
        return (
            <div className={styles.placingAds}>
                <ViewAd ad={{Title:" something",Client:"",Type_RE:"",Status:"",city:"",Ad_date:"",Addr:""}}/>
                <ViewAd ad={{Title:" something",Client:"",Type_RE:"",Status:"",city:"",Ad_date:"",Addr:""}}/>
                
            </div>
        )
    }
}
