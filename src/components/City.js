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
    animationDelay: "1.2s"
  }
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
          <TreeMenu hasSearch={false} data={states} />
        ) : (
          "Data not found"
        )}
      </div>
    </Layout>
  );
}
