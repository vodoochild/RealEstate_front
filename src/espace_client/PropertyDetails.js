import React from 'react';
import image1 from '../pages/images/c1.jpg'
import image2 from '../pages/images/c2.jpg'
import image3 from '../pages/images/c3.jpg'
import Nav from "./html_elements/Nav";
export default class PropertyDetails extends React.Component {
   /*  componentDidMount() {
        console.log(this.props.match.params.id);

    }*/

    state= {
        isLoading : true,
        bien : {},
    }

    async componentDidMount() {
        const response= await fetch('http://localhost:3000/annonce/annonce/'+this.props.match.params.id);
        const body =  await response.json();
        this.setState({annonce : body, isLoading: false})
    }

    render() {
        console.log(this.state.annonce);
        //  console.log(this.state.annonce.bien.prix);
        const {isLoading, annonce}= this.state;

        if (isLoading)
            return (<div>Loading...</div>);


        return (
            <div>
                <Nav/>
            <div>

            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">{annonce.titre}</h1>
                                <span className="color-text-a">{annonce.date_publication}</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {annonce.titre}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className = "property-single nav-arrow-b" >
            <div className = "container" >
            <div className = "row" >
            <div className = "col-sm-12" >


        <div className="row justify-content-between">
            <div className="col-md-5 col-lg-4">
                <div className="property-price d-flex justify-content-center foo">
                    <div className="card-header-c d-flex">
                        <div className="card-box-ico">
                            <span className="ion-money">DH</span>
                        </div>
                        <div className="card-title-c align-self-center">
                            <h3 className="title-c">{annonce.bien.prix}</h3>
                        </div>
                    </div>
                </div>
                <div className="property-summary">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box-d section-t4">
                                <h3 className="title-d">Details sur le Bien</h3>
                            </div>
                        </div>
                    </div>
                    <div className="summary-list">
                        <ul className="list">
                            <li className="d-flex justify-content-between">
                                <strong>ID Bien:</strong>
                                <span>{annonce.bien.id}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <strong>Location:</strong>
                                <span>{annonce.ville}, {annonce.code_postal}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <strong>Type bien:</strong>
                                <span>{annonce.bien.type}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <strong>Status:</strong>
                                <span>{annonce.type_annonce}</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <strong>Surface:</strong>
                                <span>{annonce.bien.surface}m
                        <sup>2</sup>
                      </span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <strong>Pièces:</strong>
                                <span>{annonce.bien.nb_pieces}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-7 col-lg-7 section-md-t3">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box-d">
                            <h3 className="title-d">Description du Bien</h3>
                        </div>
                    </div>
                </div>
                <div className="property-description">
                    <p className="description color-text-a">
                        {annonce.bien.description}
                    </p>

                </div>

            </div>
        </div>
                <div className="col-md-10 offset-md-1">
                    <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-video-tab" data-toggle="pill" href="#pills-video"
                               role="tab"
                               aria-controls="pills-video" aria-selected="true">Video</a>
                        </li>

                    </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-video" role="tabpanel"
                         aria-labelledby="pills-video-tab">
                        <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel" style={{ height: "700px"}}>
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" style={{ width:"800",height: "700px"}} src={image1} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ width:"800",height: "700px"}} src={image2} alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ width:"800",height: "700px"}} src={image3} alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
                        <img src="img/plan2.jpg" alt="" className="img-fluid"/>
                    </div>

                </div>
                </div>

                <div className="col-md-12">
                    <div className="row section-t3">
                        <div className="col-sm-12">
                            <div className="title-box-d">
                                <h3 className="title-d">Contacter Agent</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                      {/*  <div className="col-md-6 col-lg-12">
                            <div className="property-agent">
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between">
                                        <strong>Mobile:</strong>
                                        <span className="color-text-a">{bien.agent.num_telephone}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Email:</strong>
                                        <span className="color-text-a">{bien.agent.email}</span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className="breadcrumb-item active"><b>Ou bien envoyer lui un message</b></p>*/}
                        <div className="col-md-12 col-lg-12">
                            <div className="property-contact">
                                <form className="form-a">
                                    <div className="row">
                                        <div className="col-md-12 mb-1">
                                            <div className="form-group">
                                                <input type="text"
                                                       className="form-control form-control-lg form-control-a"
                                                       id="inputName"
                                                       placeholder="Nom *" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-1">
                                            <div className="form-group">
                                                <input type="email"
                                                       className="form-control form-control-lg form-control-a"
                                                       id="inputEmail1"
                                                       placeholder="Email *" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-1">
                                            <div className="form-group">
                        <textarea id="textMessage" className="form-control" placeholder="Message *" name="message"
                                  cols="45"
                                  rows="8" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-a">Envoyer Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
        </div>
            </section>
                <section className="section-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">EstateAgency</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <p className="w-text-a color-text-a">
                                            Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            exea commodo consequat duis
                                            sed aute irure.
                                        </p>
                                    </div>
                                    <div className="w-footer-a">
                                        <ul className="list-unstyled">
                                            <li className="color-a">
                                                <span className="color-text-a">Phone .</span> contact@example.com
                                            </li>
                                            <li className="color-a">
                                                <span className="color-text-a">Email .</span> +54 356 945234
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="nav-footer">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">About</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Property</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Blog</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="socials-a">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-dribbble" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-footer">
                                    <p className="copyright color-text-a">
                                        &copy; Copyright
                                        <span className="color-a">EstateAgency</span> All Rights Reserved.
                                    </p>
                                </div>
                                <div className="credits">

                                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            </div>
        );
    }
}
