import React, { useState } from 'react'
import styles from '../pages/Ads.module.css'
import image1 from '../pages/images/c1.jpg'
import image2 from '../pages/images/c2.jpg'
import image3 from '../pages/images/c3.jpg'


import {  Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption , Collapse, Button, CardBody, Card} from 'reactstrap';
import { Title } from 'react-bootstrap/lib/Modal'
const items = [
    {
      src: image1,
      altText: 'Slide 1',
      caption: 'Slide 1',
      
    },
    {
      src: image2,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: image3,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
 
 interface Props {
     ad:{
         Title:string;
         Client:string;
         Type_RE:string;
         Status:string;
         city:string;
         Addr:string;
         Ad_date:string;
       /*   image1:string;
         image2:string;
         image3:string */
     }
 };

const ViewAd = (props:Props)=> {
    const ad = props.ad;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex:any) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
           <div className={styles.dimensions}><img src={item.src} alt={item.altText} className={styles.carimg} /></div> 
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
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
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
    <div>Titre annonce{ad?.Title}</div>    
    <div>Client{ad?.Client}</div>
    <div>type du local{ad?.Type_RE}</div>
    <div>Etat{ad?.Status}</div>
    <div>city{}</div>
    <div>Adresse{ad?.Addr}</div>
    <div>la date de la publication{ad?.Ad_date}</div>
      </CardBody>
    </Card>
  </Collapse>
        </div>
   
    </div>
      </div>
    );
   
};
export default ViewAd;