import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div> Home page </div>
  );
}

const About = () => {
  return (
    <div> About page </div>
  );
}

const Contact = () => {
  return (
    <div> Contact page </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </BrowserRouter>, 
  document.getElementById('root')
)