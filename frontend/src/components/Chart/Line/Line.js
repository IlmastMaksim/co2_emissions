import React from 'react';

import { Line } from 'react-chartjs-2';

import classes from '../Chart.css';

const line = (props) => {
  let data = {}, options = {};
  if (props.emissions) {
      data = {
        labels: props.emissions.map(el => el[2]),
        datasets: [
          {
            borderColor: "black",
            backgroundColor: "#00b4ff",
            label:  props.emissions[0][0],
            data: props.emissions.map(el => el[3]),
            fill: false,
            borderDash: [5, 5]
          }
        ]
    }
      options = {
        responsive: true,
        title: {
          display: true,
          text: props.emissions[0][1]
        },
        tooltips: {
          mode: 'label'
        },
        hover: {
          mode: 'dataset'
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                show: true,
                labelString: 'Years'
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                show: true,
                labelString: 'Value'
              }
            }
          ]
        }
    }
  }
    return (
        <div className={classes.ChartWrap}>
            <Line data={data} options={options}/>
        </div>
    )
}

export default line;