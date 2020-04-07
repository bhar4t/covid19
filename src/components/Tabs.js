import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Chart } from "react-charts";
import "react-tabs/style/react-tabs.css";

const styles = {
  tabs: {
    height: "100%",
    width: "92%",
    overflow: "auto",
    scrollBehavior: "smooth",
  },
  th: {
    textAlign: "center",
    textTransform: "none",
  },
  td: { textAlign: "center" },
  tdFirst: { textTransform: "none" },
  visuals: {
    width: "100%",
    height: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20,
  },
  label: {
    backgroundColor: "#4ab5eb",
    height: "0.8vh",
    width: "0.8vh",
    padding: 10,
  },
  text: { fontSize: "1.8vh", padding: 8, color: "gray" },
  footer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

// dailyconfirmed: "1"
// dailydeceased: "0"
// dailyrecovered: "0"
// date: "30 January "
// totalconfirmed: "1"
// totaldeceased: "0"
// totalrecovered: "0"

export default ({ states, cases, colors }) => {
  const data = React.useMemo(
    () => [
      {
        label: "Confirmed",
        data: cases.map((e, i) => ({ x: i, y: e.totalconfirmed })),
      },
      {
        label: "Deceased",
        data: cases.map((e, i) => ({ x: i, y: e.totaldeceased })),
      },
      {
        label: "Recovered",
        data: cases.map((e, i) => ({ x: i, y: e.totalrecovered })),
      },
    ],
    [cases]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <Tabs style={styles.tabs}>
      <TabList>
        <Tab>State wise</Tab>
        <Tab>Daily records</Tab>
        <Tab>Visuals</Tab>
      </TabList>
      <TabPanel>
        <table cellSpacing="10" cellPadding="10">
          <thead>
            <tr>
              <td style={styles.th}>State</td>
              <td style={styles.th}>Confimed</td>
              <td style={styles.th}>Active</td>
              <td style={styles.th}>Recovered</td>
              <td style={styles.th}>Deaths</td>
            </tr>
          </thead>
          <tbody>
            {states &&
              states.length > 0 &&
              states.map((e, i) => {
                return (
                  <tr
                    key={`${i}-statewise`}
                    style={{
                      backgroundColor: i % 2 === 0 ? "white" : "#f5fffd",
                    }}
                  >
                    <td key={`${i}-state`} style={styles.tdFirst}>
                      {e.state}
                    </td>
                    <td key={`${i}-confirmed`} style={styles.td}>
                      {e.confirmed}
                    </td>
                    <td
                      key={`${i}-active`}
                      style={{ ...styles.td, color: colors.case }}
                    >
                      {e.active}
                    </td>
                    <td
                      key={`${i}-recovered`}
                      style={{ ...styles.td, color: colors.recover }}
                    >
                      {e.recovered}
                    </td>
                    <td
                      key={`${i}-deaths`}
                      style={{ ...styles.td, color: colors.death }}
                    >
                      {e.deaths}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </TabPanel>
      <TabPanel>
        <table cellSpacing="10" cellPadding="10">
          <thead>
            <tr>
              <td style={styles.th}>Date</td>
              <td style={styles.th}>Confimed</td>
              <td style={styles.th}>Recovered</td>
              <td style={styles.th}>Deceased</td>
              <td style={styles.th}>Total Confimed</td>
              <td style={styles.th}>Total Recovered</td>
              <td style={styles.th}>Total Deceased</td>
            </tr>
          </thead>
          <tbody>
            {cases &&
              cases.length > 0 &&
              cases.map((e, i) => {
                return (
                  <tr
                    key={`${i}-dailyrecords`}
                    style={{
                      backgroundColor: i % 2 === 0 ? "white" : "#f5fffd",
                    }}
                  >
                    <td key={`${i}-date`} style={styles.tdFirst}>
                      {e.date}
                    </td>
                    <td
                      key={`${i}-dailyconfirmed`}
                      style={{ ...styles.td, color: colors.case }}
                    >
                      {e.dailyconfirmed}
                    </td>
                    <td
                      key={`${i}-dailyrecovered`}
                      style={{ ...styles.td, color: colors.recover }}
                    >
                      {e.dailyrecovered}
                    </td>
                    <td
                      key={`${i}-dailydeceased`}
                      style={{ ...styles.td, color: colors.death }}
                    >
                      {e.dailydeceased}
                    </td>
                    <td
                      key={`${i}-totalconfirmed`}
                      style={{ ...styles.td, color: colors.case }}
                    >
                      {e.totalconfirmed}
                    </td>
                    <td
                      key={`${i}-totalrecovered`}
                      style={{ ...styles.td, color: colors.recover }}
                    >
                      {e.totalrecovered}
                    </td>
                    <td
                      key={`${i}-totaldeceased`}
                      style={{ ...styles.td, color: colors.death }}
                    >
                      {e.totaldeceased}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </TabPanel>
      <TabPanel>
        <div style={styles.visuals}>
          <div style={styles.text}>
            {cases && cases.length > 0
              ? `${cases[cases.length - 1].date} - ${cases[0].date}`
              : "Data fetching..."}
          </div>
          <Chart data={data} axes={axes} />
          <div style={styles.footer}>
            <div style={styles.label}></div>
            <span style={styles.text}>Cases</span>
            <div style={{ ...styles.label, backgroundColor: "#decf40" }}></div>
            <span style={styles.text}>Recovered</span>
            <div style={{ ...styles.label, backgroundColor: "#ea6566" }}></div>
            <span style={styles.text}>Deaths</span>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};
