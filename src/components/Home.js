import React from "react";
import Layout from "../layouts/Layout";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 46,
    height: "calc(100vh - (56px + 46px))",
    width: "100vw",
    justifyContent: "space-around",
    alignItem: "center",
    animationDelay: "1.2s"
  },
  highlight: {
    flex: 2,
    width: "90vw",
    backgroundColor: "pink",
    margin: "3vh"
  },
  list: {
    flex: 3,
    width: "90vw",
    backgroundColor: "gray",
    margin: "3vh",
    marginTop: "0vh",
    marginBottom: "9vh",
    overflow: "auto",
    whiteSpace: "nowrap"
  }
};

export default function Home({
  cases,
  today,
  states,
  tested,
  isLoading,
  errorMessage
}) {
  return (
    <Layout selectedNav={2}>
      <div style={styles.container} className="fadeInUp">
        {isLoading ? (
          "Loader..."
        ) : (
          <>
            <div style={styles.highlight}>
              Last updated{" "}
              <div>
                {today && today.length > 0
                  ? today[0].lastupdatedtime
                  : "Date Missing"}
              </div>
              <div>Today</div>
              <div>Cases:</div>
              {today && today.length > 0 ? today[0].confirmeddelta : 0}
              <div>Recovered:</div>
              {today && today.length > 0 ? today[0].recovereddelta : 0}
              <div>Deaths:</div>
              {today && today.length > 0 ? today[0].deceaseddelta : 0}
            </div>
            <div style={styles.list}>
              {cases &&
                cases.length > 0 &&
                cases.map(e => {
                  return (
                    <div>
                      <span>dailyconfirmed: {e.dailyconfirmed}</span>
                      <span>dailydeceased: {e.dailydeceased}</span>
                      <span>dailyrecovered: {e.dailyrecovered}</span>
                      <span>date: {e.date}</span>
                      <span>totalconfirmed: {e.totalconfirmed}</span>
                      <span>totaldeceased: {e.totaldeceased}</span>
                      <span>totalrecovered: {e.totalrecovered}</span>
                    </div>
                  );
                })}
            </div>
            <div style={styles.list}>
              {states &&
                states.length > 0 &&
                states.map(e => {
                  return (
                    <div>
                      <span>active: {e.active}</span>
                      <span>confirmed: {e.confirmed}</span>
                      <span>Deaths: {e.deaths}</span>
                      <span>lastupdatedtime: {e.lastupdatedtime}</span>
                      <span>recovered: {e.recovered}</span>
                      <span>state: {e.state}</span>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
