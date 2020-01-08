import React, { Component } from 'react'
import ViewAd from '../components/ViewAd'
import { Title } from 'react-bootstrap/lib/Modal'
import styles from './Ads.module.css'
import Ad from '../components/Ad'
interface State{
    Ads:any[]
}

interface Props{


}
export default class Ads extends Component<Props,State> {
    constructor(props:any) {
        super(props);
        this.state = {Ads:[],};
      }
    componentDidMount(){
      this.getAds();
        
    }
    getAds() {
        fetch('http://localhost:3000/annonce/annoncesByAgent/5')
        .then((result) => result.json())
        .then((info) => {
            console.log(info);
            this.setState({Ads: info});
        });
    }
    render() {
        console.log(this.state.Ads)
       const myads = this.state.Ads.map((ad:any)=>{
     return(
          <ViewAd key={ad.id} ad={ad} onDeleted={()=>{
            this.getAds();
          }}/>
           )
       })
            return (
            <div className={styles.placingAds}> 
            {myads}
            </div> 
        )
    }
}
