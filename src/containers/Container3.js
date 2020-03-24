import React, { useEffect } from "react";
import Axios from "axios";

function Container3() {
  useEffect(() => {
    Axios.get("https://api.covid19india.org/travel_history.json")
      .then(data => {
        console.log(data);
      })
      .catch(console.error);
  }, []);
  return <>Container3</>;
}

export default Container3;
