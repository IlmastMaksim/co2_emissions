import React from 'react';

import Option from '../../Option/Option';

import classes from './AmountSelect.css';

const amountSelect = (props) => {
    const amountValues = [5, 15, 25, 35, 50];
    const amounts = amountValues.map((el, i) => {
        return <Option value={el} key={i} >{el}</Option>
    });
    const ph = "Countries to show";
    return (
        <select defaultValue={props.amount ? props.amount : ph}  onChange={props.handleCountryAmountInput} className={classes.AmountSelect}>
            <option disabled defaultValue>{ph}</option>
            {amounts}
        </select>
    )
}   

export default amountSelect;