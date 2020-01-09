import React , { Component }  from 'react';
import {Link} from "react-router-dom";

export default class Property extends Component {
    state= {
        isLoading : true,
        annonces : [],
    }

    async componentDidMount() {
        const response= await fetch('http://localhost:3000/annonce/allAnnonces');
        const body =  await response.json();
        this.setState({annonces : body, isLoading: false})
    }

    render() {
        const {annonces, isLoading}= this.state;
        console.log(annonces);

            if(isLoading)
                return (<div>Loading...</div>);

        return (
            <div className="main-container">
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Trouver Votre Bien</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="property-grid grid">
            <div className="row">
            {
                annonces.map(annonce =>

            <div className="col-md-4">
                   <div className="card-box-a card-shadow">
                <div className="img-box-a">
                    <img src="img/property-1.jpg" alt="" className="img-a img-fluid"/>
                </div>
                <div className="card-overlay">
                    <div className="card-overlay-a-content">
                        <div className="card-header-a">
                            <h2 className="card-title-a">
                                <a href="#">{annonce.titre}
                                    {/*<br/> Olive Road Two*/}</a>
                            </h2>
                        </div>
                        <div className="card-body-a">
                            <div className="price-box d-flex">
                                <span className="price-a">{annonce.type_annonce} | MAD {annonce.prix}</span>
                            </div>
                           {/*/!* + annonce.id*!/              <a href={'/annonce'} className="link-a">Voir plus*/}
                           <Link to={"/annonce/"+ annonce.id} className="link-a">Voir plus
                                <span className="ion-ios-arrow-forward"></span>
                           </Link>
                        </div>
                        <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                                <li>
                                    <h4 className="card-info-title">Surface</h4>
                                    <span>{annonce.bien.surface}
                        <sup>2</sup>
                      </span>
                                </li>
                                <li>
                                    <h4 className="card-info-title">type de annonce</h4>
                                    <span>{annonce.type}</span>
                                </li>
                                <li>
                                    <h4 className="card-info-title">pièces</h4>
                                    <span>{annonce.bien.nb_pieces}</span>
                                </li>

                              {/*  <li>
                                    <h4 className="card-info-title">Garages</h4>
                                    <span>1</span>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                )
            }
            </div>
            </div>
            </div>
        );
    }
    }
