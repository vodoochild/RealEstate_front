import React from 'react';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import {Navbar} from 'react-bootstrap'
import Home from './pages/Home';
import Error from './pages/Error'
import UEntete from './components/UEntete';
import Ads from './pages/Ads';
import NewAd from './pages/NewAd';
import UserHome from './pages/UserHome';
import ViewAd from './components/ViewAd'
//import logo from './logo.svg';
//import './App.css';

const App: React.FC = () => {
  return (
    <>
    <UEntete />
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserHome}/>
      <Route exact path="/Ads" component={NewAd} />
      <Route exact path="/NewAd" component ={ViewAd} />
     
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
