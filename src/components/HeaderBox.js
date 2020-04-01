import React from "react";
import CountUp from "react-countup";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    padding: "10px 0px",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    borderRadius: 24,
    height: "auto"
  },
  update: {
    width: "26%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "8px",
    padding: "4px",
    fontSize: "2.5vh",
    boxShadow: "3px 2px 5px -6px black"
  },
  updatedAt: {
    flexDirection: "row",
    width: "85%",
    fontSize: "1.8vh",
    boxShadow: "none"
  },
  status: {
    width: "100%",
    margin: "6px 0px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1
  },
  title: {
    width: "85%",
    opacity: "85%",
    fontSize: "2.5vh",
    color: "#50b6ff",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 25,
    padding: 4
  },
  statusLabel: {
    color: "black",
    opacity: "50%"
  }
};

export default function HeaderBox({ today, total, colors }) {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Today</div>
      <div style={styles.status}>
        <div
          style={{
            ...styles.update,
            color: colors.case
          }}
        >
          <div style={styles.statusLabel}>Cases</div>
          <CountUp
            end={today && today.length > 0 ? today[0].confirmeddelta : 0}
            duration={2.75}
          />
        </div>
        <div
          style={{
            ...styles.update,
            color: colors.recover
          }}
        >
          <div style={styles.statusLabel}>Recovered</div>
          <CountUp
            end={today && today.length > 0 ? today[0].recovereddelta : 0}
            duration={2.75}
          />
        </div>
        <div
          style={{
            ...styles.update,
            color: colors.death
          }}
        >
          <div style={styles.statusLabel}>Deaths</div>
          <CountUp
            end={today && today.length > 0 ? today[0].deceaseddelta : 0}
            duration={2.75}
          />
        </div>
      </div>
      <div style={styles.title}>Total</div>
      <div style={styles.status}>
        <div
          style={{
            ...styles.update,
            color: colors.case
          }}
        >
          <div style={styles.statusLabel}>Cases</div>
          <CountUp end={total ? total.confirmed : 0} duration={2.75} />
        </div>
        <div
          style={{
            ...styles.update,
            color: colors.recover
          }}
        >
          <div style={styles.statusLabel}>Recovered</div>
          <CountUp end={total ? total.recovered : 0} duration={2.75} />
        </div>
        <div
          style={{
            ...styles.update,
            color: colors.death
          }}
        >
          <div style={styles.statusLabel}>Deaths</div>
          <CountUp end={total ? total.deaths : 0} duration={2.75} />
        </div>
      </div>
      <div
        style={{
          ...styles.update,
          ...styles.updatedAt
        }}
      >
        <div
          style={{
            ...styles.statusLabel,
            display: "flex",
            whiteSpace: "nowrap"
          }}
        >
          Last updated
        </div>
        <div style={styles.statusLabel}>
          {today && today.length > 0
            ? today[0].lastupdatedtime
            : "Date Missing"}
        </div>
      </div>
    </div>
  );
}
