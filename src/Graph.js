import React from 'react'
import Plot from 'react-plotly.js';

const GroupedBarChart = (props) => {
  var plot1 = {
    x: ["USA", "India", "France", "Germany", "Brazil"],
    y: [1044888, 446834, 395333	, 378225, 368689],
    name: "Total Cases",
    type: "bar",
  };

  var plot2 = {
    x: ["USA", "India", "France", "Germany", "Brazil"],
    y: [1136313, 530745, 164286, 166128, 697361],
    name: "Total Death",
    type: "bar",
  };

  var plot3 = {
    x: ["USA", "India", "France", "Germany", "Brazil"],
    y: [1015757, 441508, 392887, 374514, 359531],
    name: "Total Recovered",
    type: "bar",
  };

  var plot4 = {
    x: ["USA", "India", "France", "Germany", "Brazil"],
    y: [1776775, 1817, 80317, 205049, 218454],
    name: "Active Cases",
    type: "bar",
  };

  var data = [plot1, plot2, plot3, plot4];
  return (
    <Plot
      data={data}
      layout={{ width: 800, height: 500 }} />
  )
}

export default GroupedBarChart