import React from "react";
import ChoroplethMap from "./ChlropathMap";
import Layout from "../layouts/Layout";

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
        "Loading.."
      ) : errorMessage !== "" ? (
        errorMessage
      ) : (
        <ChoroplethMap states={states} />
      )}
    </Layout>
  );
}
