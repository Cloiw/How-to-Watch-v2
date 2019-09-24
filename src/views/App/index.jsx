import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Home';
import Sagas from '../Sagas';
import TimeLines from '../TimeLines';
import MainNavbar from '../../components/MainNavbar';
import ScrollToTop from '../../components/ScrollToTop';
import NoMatchPage from '../NoMatchPage';


const App = () => (

  <Router>
    <ScrollToTop>
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
        <Route
          exact
          path="/sagas/:sagasId"
          render={(props) => <TimeLines {...props} />}
        />
        <Route
          component={NoMatchPage}
        />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
