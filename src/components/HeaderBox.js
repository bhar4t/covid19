import React from "react";
import CountUp from "react-countup";
import { Share2 } from "react-feather";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "96vw",
    padding: "8px 0px",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    borderRadius: 24,
    height: "auto",
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
    boxShadow: "0px 2px 5px -6px black",
  },
  updatedAt: {
    flexDirection: "row",
    width: "85%",
    fontSize: "1.8vh",
    boxShadow: "none",
  },
  status: {
    width: "100%",
    margin: "6px 0px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  title: {
    width: "85%",
    opacity: "85%",
    fontSize: "2.5vh",
    color: "#50b6ff",
    backgroundColor: "#fafafa",
    textAlign: "center",
    borderRadius: 25,
    padding: 4,
  },
  statusLabel: {
    color: "black",
    opacity: "50%",
  },
};

export default function HeaderBox({ today, total, colors }) {
  const handleShare = (
    cases,
    recovered,
    deaths,
    totalCases,
    totalRecovered,
    totalDeaths,
    updatedAt
  ) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Covid19 - India (Live: Corona Patient Tracker)",
          text: `Covid19 - India\n\nTODAY\nCases: ${cases},\nRecoverd: ${recovered},\nDeaths: ${deaths}, \n\nTOTAL\nCases: ${totalCases},\nRecoverd: ${totalRecovered},\nDeaths: ${totalDeaths}\nUpdated at: ${updatedAt}\n\nStay Informed, Stay Safe!\nFor more information click on below link\n`,
          // text: `Covid19 - India\n\nTOTAL\nCases: ${totalCases},\nRecoverd: ${totalRecovered},\nDeaths: ${totalDeaths}\nUpdated @ ${updatedAt}\n\nStay Informed, Stay Safe!\nFor more information click on below link`,
          url: "https://corona-in.web.app",
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch((err) => {
          console.log(`Couldn't share because of`, err.message);
        });
    } else {
      console.log("web share not supported");
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.title}>Today</div>
      <div style={styles.status}>
        <div
          style={{
            ...styles.update,
            boxShadow: "-3px 2px 5px -6px black",
            color: colors.case,
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
            color: colors.recover,
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
            boxShadow: "3px 2px 5px -6px black",
            color: colors.death,
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
            boxShadow: "-3px 2px 5px -6px black",
            color: colors.case,
          }}
        >
          <div style={styles.statusLabel}>Cases</div>
          <CountUp end={total ? total.confirmed : 0} duration={2.75} />
        </div>
        <div
          style={{
            ...styles.update,
            color: colors.recover,
          }}
        >
          <div style={styles.statusLabel}>Recovered</div>
          <CountUp end={total ? total.recovered : 0} duration={2.75} />
        </div>
        <div
          style={{
            ...styles.update,
            boxShadow: "3px 2px 5px -6px black",
            color: colors.death,
          }}
        >
          <div style={styles.statusLabel}>Deaths</div>
          <CountUp end={total ? total.deaths : 0} duration={2.75} />
        </div>
      </div>
      <div
        style={{
          ...styles.update,
          ...styles.updatedAt,
        }}
      >
        <div
          style={{
            ...styles.statusLabel,
            display: "flex",
            whiteSpace: "nowrap",
          }}
        >
          Last updated
        </div>
        <div style={styles.statusLabel}>
          {today && today.length > 0
            ? today[0].lastupdatedtime
            : "Date Missing"}
        </div>
        {navigator.share && (
          <Share2
            size="24"
            color="pink"
            onClick={(e) => {
              e.preventDefault();
              handleShare(
                today[0].confirmeddelta,
                today[0].recovereddelta,
                today[0].deceaseddelta,
                total.confirmed,
                total.recovered,
                total.deaths,
                today[0].lastupdatedtime
              );
            }}
          />
        )}
      </div>
    </div>
  );
}
