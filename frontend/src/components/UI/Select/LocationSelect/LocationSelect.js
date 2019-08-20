import React from 'react';

import Option from '../../Option/Option';

import classes from './LocationSelect.css';

const locationSelect = (props) => {
    const options = props.locationNames.map((item, i) => {return <Option key={i} id={i} value={item}>{item}</Option>});
    let ph = props.locationForComparison ? "Location for comparison" : "Location";
    return (
        <div>
            <select name="location" defaultValue={props.location ? props.location : ph} onChange={props.handlerForLocation || props.handlerForLocationForComparison} className={classes.CountrySelect}>
                <option disabled defaultValue>{ph}</option>
                {options}
            </select>
        </div>
    )
}

export default locationSelect;