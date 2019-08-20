import React from 'react';

import Option from '../Option/Option';

import { fillArray } from '../../../shared/util';

import classes from './Select.css';

const select = (props) => {
    const amountValues = [5, 15, 25, 35, 50];
    const amounts = amountValues.map((el, i) =>
        <Option value={el} key={i} >{el}</Option>
    );
    const amountPlaceholder = "Countries to show";

    const sYear = 1950;
    const eYear = new Date().getFullYear();

    const years = fillArray(sYear, eYear)
                    .map((el, i) => 
                        <Option value={el} key={i} >{el}</Option>
                    )
                    .reverse();
    const yearsPlaceholder = "Years"

    let locations = [];
    
    if (typeof props.locations !== "undefined") {
        locations = props.locations.map((l, i) => <Option key={i} id={i} value={l}>{l}</Option>);
    }
    const locationPlaceholder = "Location";

    let element;

    switch ( props.elementType ) {
        case ( 'amount' ):
            element = <select 
                        defaultValue={props.amount ? props.amount : amountPlaceholder}
                        onChange={props.handleInputs}
                        className={classes.Select}
                        name="amount"
                        style={{marginBottom: "1.2em"}}>
                            <option disabled defaultValue>{amountPlaceholder}</option>
                            {amounts}
                    </select>
            break;

        case ( 'years' ):
            element = <select 
                        defaultValue={props.years ? props.years : yearsPlaceholder}
                        onChange={props.handleInputs}
                        className={classes.Select}
                        name="years">
                            <option disabled defaultValue>{yearsPlaceholder}</option>
                            {years}
                        </select>
            break;

        case ( 'location' ):
            element = <select 
                        defaultValue={props.location ? props.location : locationPlaceholder} 
                        onChange={props.handleInputs} 
                        className={classes.Select}
                        name="location"
                        style={{marginBottom: "1em"}}>>
                            <option disabled defaultValue>{locationPlaceholder}</option>
                            {locations}
                    </select>;
            break;

        default:
            element = null;
    }

    return (
        <div>
            {element}
        </div>
    )
}



export default select;