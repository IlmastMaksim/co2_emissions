import React from 'react';

import classes from './Form.css';

const form = (props) => {
    return (
    <form onSubmit={props.handleSubmitForm}>
        <fieldset className={classes.FormFieldset}>
            <legend className={classes.FormLegend}>
                <p>{props.subheader}</p>
            </legend>
            {props.children}
        </fieldset>
    </form>
    )
}

export default form