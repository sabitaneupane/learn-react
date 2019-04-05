import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Error from "./component/error";
import Navbar from "./component/navbar";


const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </div>
    );
  };
  
  export default Routes;