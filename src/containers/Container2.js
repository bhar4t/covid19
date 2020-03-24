import React, { useEffect, useState } from "react";
import Axios from "axios";
import States from "../components/States";

function useFetchData() {
  const [errorMessage, setErrorMessage] = useState("");
  const [states, setStates] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    Axios.get("https://api.covid19india.org/state_district_wise.json")
      .then(data => {
        if (data.status === 200) return data.data;
        else {
          throw new Error("Unable to fetch data.");
        }
      })
      .then(data => {
        setStates(data);
        setErrorMessage("");
        setLoader(false);
      })
      .catch(errorMessage => {
        setErrorMessage(errorMessage);
        setLoader(false);
        setStates(null);
      });
  }, []);

  return {
    states,
    loader,
    errorMessage
  };
}

function Container2() {
  const { states, loader, errorMessage } = useFetchData();
  return (
    <States states={states} errorMessage={errorMessage} isLoading={loader} />
  );
}

export default Container2;
