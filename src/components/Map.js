import React from "react";
import ChoroplethMap from "./ChlropathMap";
import Layout from "../layouts/Layout";
import Loader from "./Loader";

export default function Home({
  cases,
  today,
  states,
  tested,
  isLoading,
  errorMessage
}) {
  return (
    <Layout selectedNav={1}>
      {isLoading ? (
        <Loader />
      ) : errorMessage !== "" ? (
        errorMessage
      ) : (
        <ChoroplethMap states={states} />
      )}
    </Layout>
  );
}
