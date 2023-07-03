import React from "react";
import { setQuantity } from "./searchInputManagerSlice";

const Controls = () => {
  return (
    <select
      className="selectQuantity"
      onChange={(e) => {
        setQuantity(e.target.value);
      }}
    >
      {[1, 2, 3, 4, 5].map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </select>
  );
};

export default Controls;
