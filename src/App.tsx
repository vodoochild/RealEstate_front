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
//import logo from './logo.svg';
//import './App.css';

const App: React.FC = () => {
  return (
    <>
  
    <BrowserRouter>
    <Switch>
      {/*<Route path="/" component={Home}/>*/}
      <Route exact path="/Ads" component={Ads} />
      <Route exact path="/Dashboard" component ={Dashboard} />
      <Route exact path="/NewAd" component={NewAd}/>
     
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
