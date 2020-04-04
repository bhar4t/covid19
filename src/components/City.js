import React from "react";
import Layout from "../layouts/Layout";
import TreeMenu from "react-simple-tree-menu";
import "../../node_modules/react-simple-tree-menu/dist/main.css";
import Loader from "./Loader";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 46,
    height: "calc(100vh - (56px + 46px))",
    width: "100vw",
    alignItem: "center",
    overflow: "scroll",
    animationDelay: "1.2s",
  },
  footer: {
    textAlign: "center",
    color: "gray",
    padding: 8,
    whiteSpace: "nowrap",
  },
};

export default function City({ states, isLoading, errorMessage }) {
  return (
    <Layout selectedNav={3}>
      <div style={styles.container} className="fadeInUp">
        {isLoading ? (
          <Loader />
        ) : errorMessage !== "" ? (
          errorMessage
        ) : states !== null ? (
          <>
            <TreeMenu initialOpenNodes={["india"]} data={states} />
            <Footer />
          </>
        ) : (
          "Data not found"
        )}
      </div>
    </Layout>
  );
}

const Footer = () => (
  <span style={styles.footer}>
    Click on <span style={{ color: "black" }}>+</span> to expand
  </span>
);
