import React, { useState } from 'react'
import styles from '../pages/Ads.module.css'
import image1 from '../pages/images/c1.jpg'
import image2 from '../pages/images/c2.jpg'
import image3 from '../pages/images/c3.jpg'


import {  Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption ,Col, Collapse, Button, CardBody, Card, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Title } from 'react-bootstrap/lib/Modal'

 interface image {
   data: string;
 }
 interface Props {
     ad:{
         id:number;
         titre:string;
         type_annonce:string;
         etat:string;
         ville:string;
         adresse:string;
         Ad_date:string;
         proprietaire:{
            nom:string;
            email:string;
            tel:string;
         },
         bien:{
           type:string;
           surface:number;
           description:string
         },
        photos: image[]
      
     }
     onDeleted():void
 };

const ViewAd = (props:Props)=> {
    const photos = props.ad.photos;
    const ad = props.ad;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  //alert thing 
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === ad.photos.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? ad.photos.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex:any) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    console.log(ad);
    const slides =!Array.isArray(ad.photos) ? [] : ad.photos.map((photo) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={photo.data}
          >
           <div className={styles.dimensions}>
             <img src={photo.data} alt={"altText"} className={styles.carimg} />
             </div> 
          { /*<CarouselCaption  captionText={item.caption} captionHeader={item.caption} />*/}
          </CarouselItem>
        );
      });    
    return(
        <div className={styles.Ads}> 
        <Carousel
        className={styles.dimensions}
        activeIndex={activeIndex}
        next={next}
        previous={previous}>
      <CarouselIndicators items={photos} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    <div className={styles.retrievedata}>
        <div><br/>
        
        <Button color="dark" onClick={toggle} style={{marginLeft:'5rem' ,marginBottom: '1rem' }}>click to view details</Button>
  <Collapse isOpen={isOpen}>
    <Card className={styles.cardim}>
      <CardBody>
    <div>Titre annonce {ad.titre}</div>    
    <div>Client {ad.proprietaire?.nom}</div>
    <div>type du local {ad.bien?.type}</div>
    <div>Etat {ad.etat}</div>
    <div>city {ad.ville}</div>
    <div>Adresse {ad.adresse}</div>
    <div>la date de la publication {ad?.Ad_date}</div>
      </CardBody>
    </Card>
  </Collapse><br/>
  <Button style={{marginLeft:'2rem' }}>Changer etat</Button>
 {/* <Button style={{marginLeft:'5rem' }}onClick={() => {
     if (window.confirm('Are you sure you wish to delete this ad?')) 
    {return fetch('http://localhost:3000/annonce/DeleteAnnonce/'+ad.id, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ id: ad.id })
    }).then(() => {
      props.onDeleted();
    });}
  }}>Delete </Button>*/}
  <Button style={{marginLeft:'3rem' }} onClick={toggleModal}>Supprimer</Button>
  <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Supprimer l'annonce</ModalHeader>
        <ModalBody>
           Cette action est irréversible, voulez vous continuer ?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
            return fetch('http://localhost:3000/annonce/DeleteAnnonce/'+ad.id, {
              method: "POST",
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({ id: ad.id })
            }).then(() => {
              props.onDeleted();
            });
          }}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

        </div>
   
    </div>
      </div>
    );
   
};
export default ViewAd;