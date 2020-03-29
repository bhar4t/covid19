import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const styles = {
  tabs: {
    height: "fill-available",
    width: "92%",
    paddingTop: "2vh",
    overflow: "auto",
    scrollBehavior: "smooth"
  },
  th: {
    textAlign: "center",
    textTransform: "none"
  },
  td: { textAlign: "center" },
  tdFirst: { whiteSpace: "nowrap", textTransform: "none" }
};

export default ({ states, cases }) => (
  <Tabs style={styles.tabs}>
    <TabList>
      <Tab>State wise</Tab>
      <Tab>Daily records</Tab>
    </TabList>
    <TabPanel>
      <table cellSpacing="10" cellPadding="10">
        <tr>
          <td style={styles.th}>State</td>
          <td style={styles.th}>Confimed</td>
          <td style={styles.th}>Active</td>
          <td style={styles.th}>Recovered</td>
          <td style={styles.th}>Deaths</td>
        </tr>
        {states &&
          states.length > 0 &&
          states.map((e, i) => {
            return (
              <tr
                style={{ backgroundColor: i % 2 === 0 ? "white" : "#f5fffd" }}
              >
                <td style={styles.tdFirst}>{e.state}</td>
                <td style={styles.td}>{e.confirmed}</td>
                <td style={styles.td}>{e.active}</td>
                <td style={styles.td}>{e.recovered}</td>
                <td style={styles.td}>{e.deaths}</td>
              </tr>
            );
          })}
      </table>
    </TabPanel>
    <TabPanel>
      <table cellSpacing="10" cellPadding="10">
        <tr>
          <td style={styles.th}>Date</td>
          <td style={styles.th}>Confimed</td>
          <td style={styles.th}>Recovered</td>
          <td style={styles.th}>Deceased</td>
          <td style={styles.th}>Total Confimed</td>
          <td style={styles.th}>Total Recovered</td>
          <td style={styles.th}>Total Deceased</td>
        </tr>
        {cases &&
          cases.length > 0 &&
          cases.map((e, i) => {
            return (
              <tr
                style={{ backgroundColor: i % 2 === 0 ? "white" : "#f5fffd" }}
              >
                <td style={styles.tdFirst}>{e.date}</td>
                <td style={styles.td}>{e.dailyconfirmed}</td>
                <td style={styles.td}>{e.dailyrecovered}</td>
                <td style={styles.td}>{e.dailydeceased}</td>
                <td style={styles.td}>{e.totalconfirmed}</td>
                <td style={styles.td}>{e.totalrecovered}</td>
                <td style={styles.td}>{e.totaldeceased}</td>
              </tr>
            );
          })}
      </table>
    </TabPanel>
  </Tabs>
);
