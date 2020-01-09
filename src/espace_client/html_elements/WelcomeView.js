import React from 'react';
import slide1 from '../../template_elements/img/slide-1.jpg';
import slide2 from '../../template_elements/img/slide-2.jpg';
import slide3 from '../../template_elements/img/slide-3.jpg';

export default class WelcomeView extends React.Component {
    render() {
        return<div className=" ">
        <div className="nmain-container">

        <section className="section-about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about-img-box">
                            <img src="img/home-img.jpg" alt="" className="figure-img" style={{width: "100%"}}/>
                        </div>
                        <div className="sinse-box">
                            <h3 className="sinse-title">EstateAgency
                                <span></span>
                                <br/> Sinse 2017</h3>
                            <p>Art & Creative</p>
                        </div>
                    </div>

                </div>
            </div>
        </section></div></div>;
        }
        }
