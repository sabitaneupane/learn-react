import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from "./component/Home";
import Topics from "./component/Topics";
import Navbar from "./component/navbar";


const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/topics" component={Topics}/>
                <Route component={Error}/>
            </Switch>
        </div>
    );
  };
  
  export default Routes;