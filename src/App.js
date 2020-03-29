import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./loader.css";
import "./App.scss";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center"
  }
};

const Home = lazy(() => import("./containers/Home"));
const City = lazy(() => import("./containers/City"));
const Map = lazy(() => import("./containers/Map"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div style={styles.container}>
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/city" render={props => <City {...props} />} />
          <Route exact path="/map" render={props => <Map {...props} />} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
