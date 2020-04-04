import React, { useEffect, useState } from "react";
import Axios from "axios";
import City from "../components/City";

function useFetchData() {
  const [errorMessage, setErrorMessage] = useState("");
  const [states, setStates] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    Axios.get("https://api.covid19india.org/state_district_wise.json")
      .then((data) => {
        if (data.status === 200) return data.data;
        else {
          throw new Error("Unable to fetch data.");
        }
      })
      .then((data) => {
        const root = {
          key: "india",
          label: "India",
          nodes: Object.entries(data).map(([key, state]) => {
            return {
              key,
              label: key,
              nodes: Object.entries(state.districtData).map(([c, city]) => {
                return {
                  key: c,
                  label: `${c}  >  ${city.confirmed}`,
                };
              }),
            };
          }),
        };
        setStates([root]);
        setErrorMessage("");
        setLoader(false);
      })
      .catch((errorMessage) => {
        setErrorMessage(errorMessage);
        setLoader(false);
        setStates(null);
      });
  }, []);

  return {
    states,
    loader,
    errorMessage,
  };
}

function CityContainer() {
  const { states, loader, errorMessage } = useFetchData();
  return (
    <City states={states} errorMessage={errorMessage} isLoading={loader} />
  );
}

export default CityContainer;
