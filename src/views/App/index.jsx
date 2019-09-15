import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Home';
import Sagas from '../Sagas';
import MainNavbar from '../../components/MainNavbar';


class App extends React.Component {
  render() {
    return (
      <Router>
        <MainNavbar />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/sagas"
            component={Sagas}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
