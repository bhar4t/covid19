import React, { useEffect } from "react";
import Axios from "axios";

function Container4() {
  useEffect(() => {
    Axios.get("https://api.covid19india.org/raw_data.json")
      .then(data => {
        console.log(data);
      })
      .catch(console.error);
  }, []);
  return <>Container4</>;
}

export default Container4;
