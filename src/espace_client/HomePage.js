import React from 'react';
import Nav from "./html_elements/Nav";
//import WelcomeView from "./html_elements/WelcomeView";
import Property from "./html_elements/Property";
import Chercher from "./html_elements/chercher";
import UserHome from "../pages/UserHome";

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.data);
        return(
            <div>
            <Nav/>
            <div className="container">
             <Chercher/>
            {/*<WelcomeView/>*/}
            <UserHome/>
            <Property/>
        </div>
            </div>
        );
    }
}
