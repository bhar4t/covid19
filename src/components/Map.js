import React from "react";
import ChoroplethMap from "./ChlropathMap";
import Layout from "../layouts/Layout";
import Loader from "./Loader";
import Error from "./Error";

export default function Home({ states, isLoading, errorMessage }) {
  return (
    <Layout selectedNav={1}>
      {isLoading ? (
        <Loader />
      ) : errorMessage !== "" ? (
        <Error message={errorMessage} />
      ) : (
        <ChoroplethMap states={states} />
      )}
    </Layout>
  );
}
