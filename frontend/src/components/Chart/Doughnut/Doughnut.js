
import React from 'react';

import { Doughnut } from 'react-chartjs-2';

import classes from './Doughnut.css';

const doughnut = (props) => {
  let data = {}, options = {};
    data = {
        labels: props.emissions.map(el => el[0]),
        datasets: [
          {
            data: props.emissions.map(el => el[3]),
            backgroundColor: [
              `#98ff98`,
              `#E1F270`,
              `#00FFD3`,
              `#FFB6BE`,
              `#CFDFFF`,
              `#FFC88A`,
              `#FFFF98`,
              `#E0FFE0`
            ]
        }
      ]
    }
    options = {
        responsive: true,
        title: {
          display: true,
          text: `${props.emissions[0][1]} across the great powers at year ${props.emissions[0][2]}`
        }
    }

  let lineDivClasses;
  props.show === false ? lineDivClasses=classes.DoughnutWrap.concat(" ", classes.Hidden) : lineDivClasses=classes.DoughnutWrap;
  return (
      <div className={lineDivClasses}>
          <Doughnut data={data} options={options}/>
      </div>
  )
}

export default doughnut;