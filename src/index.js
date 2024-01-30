import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import {BrowserRouter} from "react-router-dom"; //importing react router
import reportWebVitals from './reportWebVitals';
import Routing from './router/router'; //import routing logic


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <BrowserRouter> 
   <Routing />
</BrowserRouter> 
);

reportWebVitals();

