import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Home';
import Sagas from '../Sagas';
import MainNavbar from '../../components/MainNavbar';


const App = () => (
  <Router>
    <MainNavbar />
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/sagas"
        component={Sagas}
      />
    </Switch>
  </Router>
);

export default App;
