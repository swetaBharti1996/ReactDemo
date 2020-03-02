import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';
import Nav from './Nav/Nav';
import About from './Nav/About';
import Contactus from './Nav/Contactus';
import Off from './Nav/Off';
import Offer from './Nav/Offer';
import Refer from './Nav/Refer';
import  Sign from './Nav/Sign';
import Offlinetext from './Offlinetext/Offlinetext';
import Store from './Store/Store';

class App extends Component {
  render() {
return (
    <BrowserRouter>
    
      <Nav />  
      <switch>
       <Route path="/about" component={About} />
       <Route path="/contactus" component={Contactus} />
       <Route path="/off" component={Off} />
       <Route path="/offer" component={Offer} />
       <Route path="/refer" component={Refer} />
       <Route path="/sign" component={Sign} />
       <Route path="/offlinetext" component={Offlinetext} />



    <Offlinetext />
    <Store  id="1" name="Sapna books" place="Kormangla"/>
    {/* <Store  id="1" name="SKS Jewellery" place="KR Puram"/> */}
    {/* <Store  id="1" name="Sapna books" place="Kormangla"/> */}


       </switch>
    </BrowserRouter>
  );
}


}
export default App;
