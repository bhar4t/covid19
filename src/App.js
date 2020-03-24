import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";
// import Container3 from "./containers/Container3";
// import Container4 from "./containers/Container4";

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    height: 46,
    width: "100vw",
    display: "flex",
    justifyContent: "space-around",
    alignItem: "center",
    backgroundColor: "yellow"
  }
};

function App() {
  return (
    <Router>
      <>
        <Route path="/home" render={props => <Container1 {...props} />} />
        <Route path="/states" render={props => <Container2 {...props} />} />
        {/* <Route path="/container3" render={props => <Container3 {...props} />} */}
        {/* <Route path="/container4" render={props => <Container4 {...props} />} /> */}
        <Redirect from="/" to="home" />
      </>
      <div style={styles.footer}>
        <span style={{ padding: 10 }}>Home</span>
        <span style={{ padding: 10 }}>States</span>
      </div>
    </Router>
  );
}

export default App;
