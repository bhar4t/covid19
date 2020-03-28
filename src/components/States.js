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
    overflow: "scroll",
    animationDelay: "1.2s"
  }
};
export default function States({ states, isLoading, errorMessage }) {
  return (
    <Layout selectedNav={3}>
      <div style={styles.container} className="fadeInUp">
        {isLoading
          ? "Loading..."
          : errorMessage !== ""
          ? errorMessage
          : states !== null
          ? Object.entries(states).map(([key, value]) => {
              return Object.entries(value).map(([k, v]) => {
                return (
                  <div>
                    {Object.entries(v).map(([m, n]) => (
                      <span>{(key, " : ", m)}</span>
                    ))}
                  </div>
                );
              });
            })
          : "Data not found"}
      </div>
    </Layout>
  );
}
