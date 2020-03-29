import React from "react";
import Layout from "../layouts/Layout";
import HeaderBox from "./HeaderBox";
import Tabs from "./Tabs";
import Loader from "./Loader";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 46,
    height: "calc(100vh - (56px + 46px))",
    width: "100vw",
    alignItems: "center",
    animationDelay: "1.2s"
  }
};

export default function Home({
  cases,
  today,
  states,
  total,
  tested,
  isLoading,
  errorMessage
}) {
  return (
    <Layout selectedNav={2}>
      <div style={styles.container} className="fadeInUp">
        {isLoading ? (
          <Loader />
        ) : !isLoading && errorMessage !== "" ? (
          <span>
            Unable to fetch data, Please try again later <br />
            {errorMessage}
          </span>
        ) : (
          <>
            <HeaderBox today={today} total={total} />
            <Tabs states={states} cases={cases} />
          </>
        )}
      </div>
    </Layout>
  );
}
