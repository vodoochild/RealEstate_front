import React, {useState, Component} from 'react'
import {
    FormGroup,
    Collapse,
    Input,
    Col,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Label,
    Row,
    InputGroup,
    Jumbotron,
    Container
} from 'reactstrap';
import styles from './UserHome.module.css'
import {Formik, Form, Field} from 'formik'
import {ReactComponent as Logo} from './loop.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface values {
    search: String;

}

export default class UserHome extends Component {
    initialValues: values = {search: ''};

    render() {

        return (
            <div className="col">
                <section className={styles.HomepageSearch}>
                    <div className={styles.Home}></div>
                    <div className={styles.HomepageSearchData}>
                        <h2 className={styles.twoLinesofBullshit}>
                            <span className={styles.titleBgWhite}>Votre futur chez vous</span>
                            <span className={styles.titleBgGrey}>est forcément chez nous</span>
                        </h2>


                        <Formik initialValues={this.initialValues} onSubmit={(values, actions) => {
                        }}>
                            {({values}) => (
                                <Form className={styles.SearchDataForm}>
                                    <div className={styles.DataFormInputs}>
                                        <FormGroup>
                                            <Row>
                                                <Col> <span className={styles.color}>
                            <i className="fa fa-search"></i>
                             </span>
                                                </Col>
                                                <Col sm={14}>
                                                    <Input tag={Field} type="text" name="search" id="search_input"
                                                           placeholder="Région, département, ville..." required/>
                                                </Col>
                                                <Col sm={14}>
                                                    <Input tag={Field} as="select" type="select" name="select"
                                                           id="select">
                                                        <option>Maison</option>
                                                        <option>Villa</option>
                                                        <option>Appartement</option>
                                                        <option>Terrain à batir</option>
                                                        <option>Locaux commerciaux</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </FormGroup>


                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </section>
                <div className={styles.hometype}>

                </div>
            </div>
        );
    }
}
