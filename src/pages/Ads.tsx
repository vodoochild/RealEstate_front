import React, { Component } from 'react'
import ViewAd from '../components/ViewAd'
import { Title } from 'react-bootstrap/lib/Modal'
import styles from './Ads.module.css'
import Ad from '../components/Ad'
import Entete from '../components/Entete'
import {  Button, CardBody, Card, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

interface State{
    Ads:any[]
    modified:boolean
}

interface Props{


}
export default class Ads extends Component<Props,State> {
    constructor(props:any) {
        super(props);
        this.state = {Ads:[],modified:false};
      }
    componentDidMount(){
      this.getAds();
        
    }
    getAds() {
        fetch('http://localhost:3000/annonce/annoncesByAgent/1')
        .then((result) => result.json())
        .then((info) => {
            console.log(info);
            this.setState({Ads: info});
        });
    }
    render() {
      const toggle = () => this.setState({modified: !this.state.modified});
        console.log(this.state.Ads)
       const myads = this.state.Ads.map((ad:any)=>{
     return(
          <ViewAd key={ad.id} ad={ad} onModified={()=>{this.getAds()
          toggle();
          }} onDeleted={()=>{this.getAds();}}/>
           )
       })
            return (
            
              <div>
           <Entete/>
            <div className={styles.placingAds}> 
            {myads}
            </div> 
            <Modal isOpen={this.state.modified} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Annonce modifiée aves succes !
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>OK</Button>
        </ModalFooter>
      </Modal>
      </div>
           
        );
    }
}
