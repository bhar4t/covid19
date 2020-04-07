import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "50%",
    width: window.innerWidth - 36,
    backgroundColor: "#ffffff",
    margin: "auto",
    boxShadow: "lightgray 1px 1px 2px 0px",
    borderRadius: 12,
  },
  message: {
    padding: 12,
    textAlign: "justify",
    fontSize: "gray",
  },
};

export default function Error(props) {
  return (
    <div style={styles.container}>
      <img src="/error.gif" width="80%" alt="Error - Covid19 - India"></img>
      <span style={styles.message}>{props.message}</span>
    </div>
  );
}
