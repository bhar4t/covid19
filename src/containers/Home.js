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
        // setToday(data.key_values);
        setToday([{ lastupdatedtime: data.statewise[0].lastupdatedtime }]);
        setStates(data.statewise);
        setTotal(data.statewise[0]);
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
