import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Error from "./component/error";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route component={Error}/>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
)