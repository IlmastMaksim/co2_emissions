import React from 'react';

import classes from './DateSelectWrap.css';

const dateSelectWrap = (props) => {
    return (
            <select name="years" defaultValue={props.selectPlaceholder ? props.selectPlaceholder : props.gapName} onChange={props.handleForSelect} className={classes.DateFormSelect}>
                <option disabled defaultValue>{props.gapName}</option>
                {props.gap}
            </select>
    )
}

export default dateSelectWrap;