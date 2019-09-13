import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Saw from "../Saw";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            component={Home}
          />
           <Route
            path="/Saw"
            component={Saw}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
