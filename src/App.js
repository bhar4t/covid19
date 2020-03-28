import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";
import Test from "./containers/Test";
import "./App.scss";
import Map from "./containers/Map";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Container1 {...props} />} />
        <Route
          exact
          path="/states"
          render={props => <Container2 {...props} />}
        />
        <Route exact path="/map" render={props => <Map {...props} />} />
        <Route exact path="/test" render={props => <Test {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
