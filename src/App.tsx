import React from 'react';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import {Navbar} from 'react-bootstrap'
import Home from './pages/Home';
import Error from './pages/Error'
import Entete from './components/Entete';
import Ads from './pages/Ads';
import NewAd from './pages/NewAd';
import UserHome from './pages/UserHome';
import Dashboard from './pages/Dashboard';
import ViewAd from './components/ViewAd'
import Nav from "./espace_client/html_elements/Nav";
import HomePage from "./espace_client/HomePage";
import Chercher from "./espace_client/html_elements/chercher";
import test from "./espace_client/html_elements/test";
import PropertyDetails from "./espace_client/PropertyDetails";
import LoginComponent from "./espace_client/LoginComponent";
//import logo from './logo.svg';
//import './App.css';

const App: React.FC = () => {
  return (
    <>

    <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <HomePage data={[1,2,3,4]} {...props} />}/>
      <Route exact path="/annonce/:id" component ={PropertyDetails} />
      <Route exact path="/login" component ={LoginComponent} />
      {/*<Route exact path="/" component={UserHome}/>*/}
      <Route exact path="/Ads" component={Ads} />
      <Route exact path="/Dashboard" component ={Dashboard} />
      <Route exact path="/NewAd" component={NewAd}/>
     
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
