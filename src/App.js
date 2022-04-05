import React from "react";
import { Box, Grid } from "@material-ui/core";
import LineChart from "./LineChart";
import "./styles.css";

const options1Data = [
  {
    name: "signal",
    color: "#57A9DE",
    data: [[1573431168152, -20], [1573431168153, -30]]
  },
  {
    name: "noise",
    color: "#FF0000",
    data: [[1573431168152, -50], [1573431168153, -55]]
  }
];

const options2Data = [
  {
    color: "#57A9DE",
    data: [[1573431168152, 20], [1573431168153, 60]]
  }
];

const options1 = {
  title: "options1",
  yLabel: "option1Y",
  legendEnable: true
};
const options2 = {
  title: "options2",
  yLabel: "options2Y",
  legendEnable: false
};
export default function App() {
  return (
    <div className="App">
      <LineChart data={options1Data} options={options1} id="option1_chart" />

      <LineChart data={options2Data} options={options2} id="option2_chart" />
    </div>
  );
}
