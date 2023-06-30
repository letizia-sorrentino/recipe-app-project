import React from "react";
import { setQuantity } from "./controlsSlice";

const Controls = () => {

return (
    <select
    onChange={(e) => {
      setQuantity(e.target.value);
    }}
  >
    {[1, 2, 3, 4, 5].map((item) => {
      return <option value={item}>{item}</option>;
    })}
  </select>



)

}

export default Controls;