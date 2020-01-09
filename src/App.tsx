import React from 'react';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import Ads from './pages/Ads';
import NewAd from './pages/NewAd';
import Dashboard from './pages/Dashboard';
import HomePage from "./espace_client/HomePage";
import PropertyDetails from "./espace_client/PropertyDetails";
import LoginComponent from "./espace_client/LoginComponent";


const App: React.FC = () => {
  return (
    <>

    <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <HomePage data={[1,2,3,4]} {...props} />}/>
      <Route exact path="/annonce/:id" component ={PropertyDetails} />
      <Route exact path="/login" component ={LoginComponent} />
      <Route exact path="/Ads" component={Ads} />
      <Route exact path="/Dashboard" component ={Dashboard} />
      <Route exact path="/NewAd" component={NewAd}/>
     
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
