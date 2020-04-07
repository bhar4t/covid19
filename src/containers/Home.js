import React, { useEffect, useState } from "react";
import Axios from "axios";
import Home from "../components/Home";

function useFetchData() {
  const [cases, setCases] = useState([]);
  const [total, setTotal] = useState({});
  const [today, setToday] = useState([]);
  const [states, setStates] = useState([]);
  const [tested, setTested] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    Axios.get("https://api.covid19india.org/data.json")
      .then((data) => {
        if (data.status === 200) return data.data;
        else {
          throw new Error("Unable to fetch data.");
        }
      })
      .then((data) => {
        setCases(data.cases_time_series);
        const yesterday =
          data.cases_time_series &&
          data.cases_time_series.length > 0 &&
          data.cases_time_series[data.cases_time_series.length - 1];
        const total =
          data.statewise && data.statewise.length > 0 && data.statewise[0];
        if (yesterday && total) {
          const today = {
            confirmeddelta:
              total.confirmed - yesterday.totalconfirmed < 0
                ? 0
                : total.confirmed - yesterday.totalconfirmed,
            recovereddelta:
              total.recovered - yesterday.totalrecovered < 0
                ? 0
                : total.recovered - yesterday.totalrecovered,
            deceaseddelta:
              total.deaths - yesterday.totaldeceased < 0
                ? 0
                : total.deaths - yesterday.totaldeceased,
            lastupdatedtime: data.statewise[0].lastupdatedtime,
          };
          setToday([today]);
        }
        setStates(data.statewise);
        setTotal(total);
        setTested(data.tested);
        setErrorMessage("");
        setLoader(false);
      })
      .catch((errorMessage) => {
        setCases([]);
        setToday([]);
        setStates([]);
        setTested([]);
        setTotal({});
        setErrorMessage(errorMessage);
        setLoader(false);
      });
  }, []);

  return {
    data: {
      cases,
      today,
      states,
      tested,
      total,
    },
    loader,
    errorMessage,
  };
}

function HomeContainer() {
  const { data, loader, errorMessage } = useFetchData();
  return <Home {...data} isLoading={loader} errorMessage={errorMessage} />;
}

export default HomeContainer;
