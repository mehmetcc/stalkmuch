import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from "history/createBrowserHistory";
import './index.css';
import 'typeface-roboto';

/**
 * GENEL OLARAK ÇOK ELLEŞMEYİN BURALARA
 */

// TODO these things should be deleted
import App from './App';
import * as serviceWorker from './serviceWorker';

/** Arkadaşlar ne yaptığınızı bilmiyorsanız silmeyin */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
  


/**
 * Totally unnecessary for localhost testing
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
