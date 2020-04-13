import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Chart } from "react-charts";
import { useTable, useSortBy } from "react-table";
import "react-tabs/style/react-tabs.css";

const stateHeaders = [
  {
    Header: "States",
    accessor: "state",
    sortType: "basic",
  },
  {
    Header: "Confirmed",
    accessor: "confirmed",
    sortType: "basic",
  },
  {
    Header: "Active",
    accessor: "active",
    sortType: "basic",
  },
  {
    Header: "Recovered",
    accessor: "recovered",
    sortType: "basic",
  },
  {
    Header: "Deaths",
    accessor: "deaths",
    sortType: "basic",
  },
];

const casesHeaders = [
  {
    Header: "Date",
    accessor: "date",
    sortType: "basic",
  },
  {
    Header: "Confirmed",
    accessor: "dailyconfirmed",
    sortType: "basic",
  },
  {
    Header: "Recovered",
    accessor: "dailyrecovered",
    sortType: "basic",
  },
  {
    Header: "Deceased",
    accessor: "dailydeceased",
    sortType: "basic",
  },
  {
    Header: "Total Confirmed",
    accessor: "totalconfirmed",
    sortType: "basic",
  },
  {
    Header: "Total Recovered",
    accessor: "totalrecovered",
    sortType: "basic",
  },
  {
    Header: "Total Deceased",
    accessor: "totaldeceased",
    sortType: "basic",
  },
];

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

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  const firstPageRows = rows.slice(0, 50);

  return (
    <>
      <table {...getTableProps()} cellSpacing="10" cellPadding="10">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} style={styles.th}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <span style={styles.footer}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : " ⟲"}
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                style={{
                  backgroundColor: i % 2 === 0 ? "white" : "#f5fffd",
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} style={styles.tdFirst}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ({ states, cases }) => {
  const columnsStates = React.useMemo(() => stateHeaders, []);
  const columnsCases = React.useMemo(() => casesHeaders, []);

  const stateData = React.useMemo(
    () =>
      states.map((e) => ({
        active: e.active,
        confirmed: e.confirmed,
        deaths: e.deaths,
        recovered: e.recovered,
        state: e.state,
      })),
    [states]
  );

  const caseVisuals =
    cases && cases.length > 0 ? cases.slice(30, cases.length - 1) : [];
  const visualData = React.useMemo(
    () => [
      {
        label: "Confirmed",
        data: caseVisuals.map((e, i) => ({ x: i, y: e.totalconfirmed })),
      },
      {
        label: "Deceased",
        data: caseVisuals.map((e, i) => ({ x: i, y: e.totaldeceased })),
      },
      {
        label: "Recovered",
        data: caseVisuals.map((e, i) => ({ x: i, y: e.totalrecovered })),
      },
    ],
    [caseVisuals]
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
        <Table columns={columnsStates} data={stateData} />
      </TabPanel>
      <TabPanel>
        <Table columns={columnsCases} data={cases} />
      </TabPanel>
      <TabPanel>
        <div style={styles.visuals}>
          <div style={styles.text}>
            {caseVisuals &&
              caseVisuals.length > 0 &&
              `${caseVisuals[0].date} - ${
                caseVisuals[caseVisuals.length - 1].date
              }`}
          </div>
          <Chart data={visualData} axes={axes} />
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
