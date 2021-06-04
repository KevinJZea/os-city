import React from 'react';
import * as d3 from "d3";

import "../styles/components/BarChart.css";

const BarChart = ( { data, selectedYear, selectedState, sort } ) => {

  d3.select("#bar-chart").text("");
  const barChartElement = document.getElementById("bar-chart");
  const barHeight = 30;
  const width =
  barChartElement ? (barChartElement.clientWidth - 20) : 355;
  const height =
  barChartElement ? (((barHeight + 2) * data.length) + 20) : 355;
  const gap = barHeight - 25;

  if (data.length === 0) {
    d3.select("#bar-chart")
      .append("h3")
        .html("Sin datos<br />seleccionados")
        .attr("class", "no-data-selected-title");
  } else {
    const svg = d3.select("#bar-chart")
      .append("svg")
        .attr("width", width)
        .attr("height", height);

    const mainTitleMarginTop = 40;
    svg.append("text")
      .attr("transform", `translate(${(width/2)-25},0)`)
      .attr("y", mainTitleMarginTop)
      .attr("class", "bar-chart--main-title")
      .text(selectedYear.title);

    if (window.innerWidth < 480) {
      const axisMargin = {top: mainTitleMarginTop + 40, right: 10, bottom: 30, left: 35}

      /* Adding Axis Starts */

      const xScale = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width - axisMargin.left - axisMargin.right]);

      const yScale = d3.scaleBand()
        .domain(data.map(d => d.shortTitle))
        .range([0, height-axisMargin.top]);

      const xAxis = d3.axisTop()
        .scale(xScale)
        .tickSize(axisMargin.top - height);

      const yAxis = d3.axisLeft()
        .scale(yScale);

      svg.append("g")
        .attr("class", "states-axis")
        .attr("transform", `translate(${axisMargin.left},${axisMargin.top})`)
        .call(yAxis);

      svg.append("g")
        .attr("transform", `translate(${axisMargin.left},${axisMargin.top})`)
        .call(xAxis);

      /* Adding Axis Ends */

      /* Adding Data Bars Starts */

      svg.append("g")
        .selectAll("rect")
        .data(data)
        .enter().append("rect")
          .attr("x", axisMargin.left)
          .attr("y", d => (d.id * (((height - axisMargin.top) / 32)) + 52.5))
          .attr("width", d => d.idh * (width - axisMargin.left - axisMargin.right))
          .attr("height", barHeight - gap);

      /* Adding Data Bars Ends */

      /* Changing if sort changes Starts */

      if (sort.value === "ascendente") {
        d3.select("#bar-chart")
          .selectAll("rect")
            .sort((a,b) => d3.ascending(a.idh, b.idh))
            .attr("y", (d, i) => ((i+1) * (((height - axisMargin.top) / 32)) + 52.5));
      } else if (sort.value === "descendente") {
        svg.selectAll("rect")
            .sort((a,b) => d3.descending(a.idh, b.idh))
            .attr("y", (d, i) => ((i+1) * (((height - axisMargin.top) / 32)) + 52.5));
      }

      /* Changing if sort changes Ends */

    } else {
      /* Adding Axis Starts */
      const axisMargin = {top: mainTitleMarginTop + 40, right: 25, bottom: 40, left: 35}

      const yScale = d3.scaleLinear()
        .domain([1, 0])
        .range([0, height - axisMargin.top - axisMargin.bottom]);

      const xScale = d3.scaleBand()
        .domain(data.map(d => d.title))
        .range([0, width - axisMargin.left - axisMargin.right]);

      const xAxis = d3.axisBottom()
        .scale(xScale);

      const yAxis = d3.axisLeft()
        .scale(yScale)
        .tickSize(axisMargin.left + axisMargin.right - width);

      svg.append("g")
        .attr("transform", `translate(${axisMargin.left},${axisMargin.top})`)
        .call(yAxis);

      svg.append("g")
        .attr("class", "states-axis")
        .attr("transform", `translate(${axisMargin.left},${height-axisMargin.bottom})`)
        .call(xAxis);


      /* Adding Axis Ends */

      /* Adding Data Bars Starts */

      svg.append("g")
        .selectAll("rect")
        .data(data)
        .enter().append("rect")
          .attr("x", (d, i) => (i * (width - axisMargin.left - axisMargin.right) / 32) + axisMargin.left + (gap / 2))
          .attr("y", d => ((height - axisMargin.bottom) - (d.idh * (height - axisMargin.bottom - axisMargin.top))))
          .attr("width", ((width - axisMargin.left - axisMargin.right) / 32) - gap)
          .attr("height",  d => (d.idh * (height - axisMargin.top - axisMargin.bottom)));

      /* Adding Data Bars Ends */

      /* Changing if sort changes Starts */

      if (sort.value === "ascendente") {
        d3.select("#bar-chart")
          .selectAll("rect")
            .sort((a,b) => d3.ascending(a.idh, b.idh))
            .attr("x", (d, i) => (i * (width - axisMargin.left - axisMargin.right) / 32) + axisMargin.left + (gap / 2));
      } else if (sort.value === "descendente") {
        svg.selectAll("rect")
            .sort((a,b) => d3.descending(a.idh, b.idh))
            .attr("x", (d, i) => (i * (width - axisMargin.left - axisMargin.right) / 32) + axisMargin.left + (gap / 2));
      }

      /* Changing if sort changes Ends */
    }

    // Change styles of Selected Year
    d3.select("#bar-chart")
      .select("svg")
      .selectAll("rect")
      .attr("class", d => {
        if (d.id === selectedState.id) {
          return "selected-state";
        }
        return 0;
      });
    }

  return (<div id="bar-chart" />); // According to eslint, this element should be closed in this way.
}

export default BarChart;
