import React, { Component } from 'react'
import { useState, useEffect, useCallback } from 'react';
import { Formik, Form, Field } from 'formik'
import styles from '../pages/Ads.module.css'
import { Col, Row, Button, FormGroup, Label, Input, FormText,InputGroup,InputGroupAddon,InputGroupText,Alert,UncontrolledAlert } from 'reactstrap';

interface  values {
 
}
interface Props{

}
interface State{
  isSent:boolean;
}
export default class Ad extends Component<Props,State> {
  constructor(props:any) {
    super(props);
    this.state = {isSent:false};   
  }

 
  onSent(){
   return(<UncontrolledAlert color="info">
  Votre Annonce a été enregitrée avec succes!
   </UncontrolledAlert>) ;
  }
  initialValues: values = {
    files: null
  };
  render() {
    const toggle = () => this.setState({isSent: !this.state.isSent});
    // Not really necessary
    //let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return (
      
      
      <Formik initialValues={this.initialValues} onSubmit={(values: any, actions) => {
        console.log(values);
        if(!Array.isArray(values.files)) {
          values.files = [];
        }
        let p = values.files.map((f: File) => new Promise<string>((fulfil, reject) => {
          let reader = new FileReader();

          reader.onloadend = () => {
            if(typeof reader.result === "string") {
              fulfil(reader.result);
            }
          };
    
          reader.readAsDataURL(f);
        }));
        Promise.all(p).then((files) => {
          let valuesToSend = {
            titre: values.titre,
            etat:values.etat,
            type_annonce:values.type_annonce,
            date_disponibilite:values.date,
            agent:{id:1,},
          
            proprietaire: {
              nom: values.nom,
              email: values.email,
              tel:values.tel
            },
            bien:{
              type:values.select,
              nb_pieces:values.chambre,
              surface:values.surface,
              description:values.desc,
              prix:values.montant,
            },
            ville: values.ville,
            photos:files.map(f => {return {data: f};})
          };
          return fetch('http://localhost:3000/annonce/saveAnnonce', {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(valuesToSend)
          });
        }).then(()=>{this.setState({isSent:true})})

        /* .then((result) => result.json()) */
   
       {/* .then((info) => { console.log(info); });*/}
      }}>
        {({setFieldValue}) =>(
          <div className={styles.dims}>
            <Alert color="info" isOpen={this.state.isSent} toggle={toggle}>
      Annonce enregistée!
    </Alert>
          <Form>
            <Row form>
              <Col>
            <FormGroup row>
              <Label for="NomProjet" sm={4}>Titre</Label>
              <Col sm={8}>
                <Input tag={Field} type="text" name="titre" id="titre" placeholder="Entrez le titre de l'annonce" required />
              </Col>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup row>
              <Label for="NomProjet" sm={2}>Type</Label>
              <Col sm={6}>
                <Input tag={Field} as="select" type="select" name="type_annonce"  required >
                <option>Vente</option>
                <option>Location</option>
                </Input>
              </Col>
            </FormGroup>
            </Col>
            </Row>        
            <FormGroup row>
              <Label for="nclient" sm={2}>Client</Label>
              <Col sm={8}>
                <Input tag={Field} type="text" name="nom" id="nom" placeholder="Entrez le nom du client" required />
              </Col>
            </FormGroup>
            <Row form>
              <Col >
                <FormGroup row>
                  <Label for="exampleCity"sm={4}>E-mail</Label>
                  <Col sm={8}>
                  <Input tag={Field} type="email" name="email" id="email"/>
                  </Col>
                </FormGroup>
              </Col>
              <Col >
                <FormGroup row >
                  <Label for="exampleZip" sm={2}>Tel</Label>
                  <Col sm={6}>
                  <Input tag={Field} type="text" name="tel" id="tel"/>
                  </Col>
                </FormGroup>  
              </Col>
            </Row>
            <FormGroup row>
            
              <Label for="tbien" sm={2}>Type du bien</Label>
              <Col sm={8}>
                <Input tag={Field} as="select" type="select" name="select" id="select" >
                <option>Maison</option>
                <option>Villa</option>
                <option>Appartement</option>
                <option>Terrain à batir</option>
                <option>Locaux commerciaux</option>
                </Input>
              </Col>
            </FormGroup>
            
              <Row form>
                 <Col>
                 <FormGroup row>
              <Label for="surface" sm={4}>Surface</Label>
              <Col sm={8}>
              <InputGroup>
                <Input tag={Field} type="number" name="surface" id="surface" placeholder="Entrer la surface en m²" />
                <InputGroupAddon addonType="append">
                <InputGroupText>m²</InputGroupText>
               </InputGroupAddon>
                </InputGroup>
              </Col>
              </FormGroup>
              </Col>
              <Col>
              <FormGroup row>
              <Label for="surface" sm={2}>Chambres</Label>
              <Col sm={6}>
                <Input tag={Field} type="number" name="chambre" id="chambre" placeholder="Entrer le nombre des chambres" />
              </Col>
              </FormGroup>
              </Col>
            
            </Row>

            <Row form>
        <Col >
       
          <FormGroup row>
            <Label for="exampleCity" sm={4}>Ville</Label>
            <Col sm={8}>
            <Input tag={Field} type="text" name="ville" id="ville"/>
            </Col>
          </FormGroup>
        </Col>
        <Col >
          <FormGroup row >
            <Label for="exampleZip" sm={2}>Zip</Label>
            <Col sm={6}>
            <Input tag={Field} type="text" name="zip" id="code_postal"/>
            </Col>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup row>
              <Label for="Addr" sm={2}>Adresse</Label>
              <Col sm={8}>
                <Input tag={Field} type="text" name="adresse" id="adresse" placeholder="L'adresse du local" />
              </Col>
            </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Description</Label>
        <Col sm={8}>
          <Input tag={Field} type="textarea" name="desc" id="desc" />
        </Col>
      </FormGroup>
      <Row form>
              <Col>
            <FormGroup row>
              <Label for="NomProjet" sm={4}>Date de disponibilité</Label>
              <Col sm={8}>
                <Input tag={Field} type="date" name="date" id="date" placeholder="date quand le bien sera disponible" required />
              </Col>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup row>
              <Label for="NomProjet" sm={2}>etat</Label>
              <Col sm={6}>
                <Input tag={Field} as="select" type="select" name="etat"  required >
                <option>cloturée</option>
                <option>Non cloturée</option>
                </Input>
              </Col>
            </FormGroup>
            </Col>
            </Row>  
            <FormGroup row>
        <Label for="exampleText" sm={2}>Montant </Label>
        <Col sm={8}>
        <InputGroup>
          <Input tag={Field} type="textarea" name="montant" id="montant" />
          <InputGroupAddon addonType="append">
          <InputGroupText>MAD</InputGroupText>
          </InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>      
      <FormGroup row>
        <Label for="files" sm={2}>Upload images</Label>
        <Col sm={8}>
          <Input type="file" name="files" id="files" onChange={(event) => {
            let files = [];
            if(event.currentTarget.files) {
              for(let i = 0; i < event.currentTarget.files.length; i++) {
                files.push(event.currentTarget.files[i]);
              }
            }
            setFieldValue("files", files);
          }} className="form-control" accept="image/*" multiple />
          <FormText color="dark">
            You can upload several images at once. 
          </FormText>
        </Col>
      </FormGroup>
     
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 5 }}>
          <Button type ="submit" color="dark" onClick={()=>{this.onSent();}}>Submit</Button>
        </Col>
      </FormGroup>
    
    </Form>
    </div>
     )}
    </Formik>
   
        );
    }
}