import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

import Props from './Props';
import DefaultProps from './DefaultProps';

import State from './State';
import SetState from './setState';
import SetStateComponent from './setStateComponent';

import RefsClass from './Refs';

import Map from './Map';

import Key from './Key';

import HandlingData from './handlingDataAndEvent/handlingdata';
import HandlingEvent from './handlingDataAndEvent/handlingevent';

import FetchData from './crudOperation/fetchdata';
import InsertData from './crudOperation/insertdata';
import UpdateData from './crudOperation/updatedata';
import DeleteData from './crudOperation/deletedata';

import BindData from './bindData';


import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
