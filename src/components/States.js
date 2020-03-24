import React from "react";

export default function States({ states, isLoading, errorMessage }) {
  return isLoading
    ? "Loading..."
    : errorMessage !== ""
    ? errorMessage
    : states !== null
    ? Object.entries(states).map(([key, value]) => {
        return Object.entries(value).map(([k, v]) => {
          return (
            <div>
              {Object.entries(v).map(([m, n]) => (
                <span>{(key, " : ", m)}</span>
              ))}
            </div>
          );
        });
      })
    : "Data not found";
}
