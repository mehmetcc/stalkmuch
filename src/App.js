/** All react related imports */
import React from 'react';
/** All material-ui related imports */

/** internal classes and/or functions defined */
import './App.css';
import Eula from './Eula';
import GlobeEntrypoint from './GlobeEntrypoint';

/** Routing related */
/** Arkadaşlar ne yaptığınızı bilmiyorsanız silmeyin */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {

  state = {
    focus: undefined,
  }

  render() {
    return (
      /** Arkadaşlar bakın routing ile oynamayın */
      <Router>
      <Switch>
            <Route exact path='/' component={Eula} />
            <Route path='/globe' component={GlobeEntrypoint} />
          </Switch>
      </Router>
      /** Routing burada bitiyo */
    );
  }

}

export default App;