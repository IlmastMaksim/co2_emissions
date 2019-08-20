import React from 'react';

import classes from './Checkbox.css';

const checkbox = (props) => {
    return (
        <div style={{marginTop: "1.2em"}}>
            <label className={classes.CheckboxLabel}>{props.label}
                <input name={props.name} type="checkbox" checked={props.state} onChange={props.handleInputs}/>
                <span className={classes.CheckboxCheckmark}></span>
            </label>
        </div>
    );
}

export default checkbox;