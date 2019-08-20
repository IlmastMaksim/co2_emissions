import React from "react";

import classes from './Pareto.css';

import { HorizontalBar } from 'react-chartjs-2';

const pareto = (props) => {
    let label = props.emissions[0][1].concat(" ", props.emissions[0][2]);

    if (props.perCapita) {
        label = props.emissions[0][1]
                        .slice(0, -4)
                        .concat('', '(t)')
                        .concat(" ", props.emissions[0][2])
                        .concat(" ", 'Per capita');
    }
    
    const data = {
        labels: props.emissions.map(el => el[0]),
        datasets: [{
            label: label,
            data: props.emissions.map(el => el[3]),
            backgroundColor: `rgba(0, 0, 0, .75)`
        }]
    }

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: true
    }
    
    return (
        <div className={classes.BarWrap}>
            <HorizontalBar
            data={data}
            options={options} />
        </div>
    )
}

export default pareto;