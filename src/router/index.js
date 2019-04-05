import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";


ReactDOM.render(
  <BrowserRouter>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </BrowserRouter>, 
  document.getElementById('root')
)