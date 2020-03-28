import React from "react";
import * as Icon from "react-feather";
import { withRouter } from "react-router-dom";

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItem: "center"
  },
  appBar: {
    position: "fixed",
    top: 0,
    height: 46,
    width: "100vw",
    display: "flex",
    alignItems: "center",
    padding: "0px 24px",
    backgroundColor: "white"
  },
  footer: {
    position: "fixed",
    bottom: 0,
    height: 56,
    width: "100vw",
    display: "flex",
    justifyContent: "space-around",
    alignItem: "center",
    backgroundColor: "#f2f5fe",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  navigation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    whiteSpace: "nowrap",
    fontSize: 8,
    padding: 3
  },
  title: {
    background: "-webkit-linear-gradient(#eee, #333)",
    webkitBackgroundClip: "text",
    fontSize: 30,
    webkitTextFillColor: "transparent"
  }
};

function App(props) {
  const navigations = [
    { icon: "Map", title: "Map", route: "/map" },
    { icon: "Grid", title: "Home", route: "/" },
    { icon: "List", title: "States", route: "/states" }
  ];
  return (
    <div style={styles.container}>
      <div style={styles.appBar}>
        <img src="/android-icon-36x36.png" alt="Covid19 - India"></img>
        <span style={styles.title}>Covid19 - India</span>
      </div>
      {props.children}
      <div style={styles.footer}>
        {navigations.map((nav, i) => {
          const Tag = Icon[nav.icon];
          return (
            <span style={styles.navigation}>
              <Tag
                style={{ padding: 10 }}
                color={props.selectedNav === 1 + i ? "black" : "#009999"}
                size={28}
                onClick={e => {
                  e.preventDefault();
                  props.history.push(nav.route);
                }}
              />
              {nav.title}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default withRouter(App);
