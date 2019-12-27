import React, { Component } from 'react'
import { useState, useEffect, useCallback } from 'react';
import { Formik, Form, Field } from 'formik'
import { Col, Row, Button, FormGroup, Label, Input, FormText } from 'reactstrap';

interface  values {
  nprojet: string;
  nclient: string;
}
export default class Ad extends Component {
 initialValues: values={nprojet:'',nclient:''};
       render() {
        return (
          <Formik initialValues={this.initialValues}  onSubmit={(values,actions) => {
            fetch('http://localhost:4000/api/ad/create' , {
             method: "POST",
            headers: {
           'Content-type': 'application/json'
          },
           body: JSON.stringify(values)
})
.then((result) => result.json())
.then((info) => { console.log(info); })
          }}>
            {({values}) =>(
            <Form>
            <FormGroup row>
              <Label for="NomProjet" sm={2}>Nom du Projet</Label>
              <Col sm={8}>
                <Input tag={Field} type="text" name="nprojet" id="nprojet" placeholder="Entrez le nom du projet" required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="nclient" sm={2}>Client</Label>
              <Col sm={8}>
                <Input tag={Field} type="text" name="nclient" id="nclient" placeholder="Entrez le nom du client" required />
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
            <Input tag={Field} type="text" name="zip" id="exampleZip"/>
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
            <FormGroup row>
              <Label for="surface" sm={2}>Surface</Label>
              <Col sm={8}>
                <Input tag={Field} type="number" name="surface" id="surface" placeholder="Entrer la surface en m²" />
              </Col>
            </FormGroup>             
            <Row form>
        <Col >
       
          <FormGroup row>
            <Label for="exampleCity"sm={4}>Ville</Label>
            <Col sm={8}>
            <Input tag={Field} type="text" name="ville" id="ville"/>
            </Col>
          </FormGroup>
        </Col>
        <Col >
          <FormGroup row >
            <Label for="exampleZip" sm={2}>Zip</Label>
            <Col sm={6}>
            <Input tag={Field} type="text" name="zip" id="zip"/>
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
          <Input tag={Field} type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>Upload images</Label>
        <Col sm={10}>
          <Input tag={Field} type="file" name="file" id="exampleFile" multiple  />
          <FormText color="dark">
            You can upload several images at once. 
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 5 }}>
          <Button type ="submit"color="dark">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
     )}
    </Formik>
        );
    }
}