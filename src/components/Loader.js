import React from "react";
import Layout from "../layouts/Layout";
import "../loader.css";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default function Loader(props) {
  if (props.layout)
    return (
      <Layout selectedNav={1}>
        <div style={styles.container}>
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </Layout>
    );
  else
    return (
      <div style={styles.container}>
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
}
