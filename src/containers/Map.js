import React, { useEffect, useState } from "react";
import Axios from "axios";
import Map from "../components/Map";

function useFetchData() {
  const [cases, setCases] = useState([]);
  const [today, setToday] = useState([]);
  const [states, setStates] = useState([]);
  const [tested, setTested] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    Axios.get("https://api.covid19india.org/data.json")
      .then(data => {
        if (data.status === 200) return data.data;
        else {
          throw new Error("Unable to fetch data.");
        }
      })
      .then(data => {
        setCases(data.cases_time_series);
        setToday(data.key_values);
        setStates(data.statewise);
        setTested(data.tested);
        setErrorMessage("");
        setLoader(false);
      })
      .catch(errorMessage => {
        setCases([]);
        setToday([]);
        setStates([]);
        setTested([]);
        setErrorMessage(errorMessage);
        setLoader(false);
      });
  }, []);

  return {
    data: {
      cases,
      today,
      states,
      tested
    },
    loader,
    errorMessage
  };
}

function Container1() {
  const { data, loader, errorMessage } = useFetchData();
  return <Map {...data} isLoading={loader} errorMessage={errorMessage} />;
}

export default Container1;
